import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv';
import orderRouter from './Routes/OrderRoutes.js';
import productRouter from './Routes/ProductRoute.js';
import consumerRouter from './Routes/ConsumerRoutes.js';
import basketRouter from './Routes/BasketRoutes.js';
import farmerRouter from './Routes/FarmerRoutes.js';
import verifyRouter from './Routes/verifyRoutes.js';
import { Webhook } from 'svix';
import bodyParser from 'body-parser';
import { Consumer } from './models/Consumer.js';
import Stripe from 'stripe';
import 'dotenv/config.js'
import  marketRoutes from './Routes/marketRoutes.js'
import cron from "node-cron";
import newsRoutes from './Routes/newsRoutes.js'; 


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "AgriAuthentic" 
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

connectDB();



app.post('/webhook/consumer', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
 
    const rawPayload = req.body.toString('utf8');
    console.log('Raw payload:', rawPayload);

 
    const payload = JSON.parse(rawPayload);
    console.log('Parsed payload:', payload);

    const headers = req.headers;
    console.log('Headers:', headers);

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(rawPayload, headers); 

    switch (evt.type) {
      case 'user.created':
        console.log('User created:', evt.data);
        const newUser = new Consumer({
          clerkUserId: evt.data.id,
          consumerName: evt.data.first_name,
          consumerEmail: evt.data.email_addresses[0].email_address,
        });
        await newUser.save();
        console.log('User created in MongoDB:', newUser);
        break;

      case 'user.updated':
        console.log('User updated:', evt.data);
        await Consumer.findOneAndUpdate(
          { clerkUserId: evt.data.id },
          { consumerName: evt.data.first_name, consumerEmail: evt.data.email_addresses[0].email_address },
          { new: true }
        );
        console.log('User updated in MongoDB');
        break;

      default:
        console.log('Unhandled event type:', evt.type);
        res.status(400).json({ success: false, error: 'Unhandled event type' });
        return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

app.use(express.json())



app.use('/api/news', newsRoutes);
app.use('/api/market', marketRoutes);
app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/consumer", consumerRouter)
app.use("/basket", basketRouter)
app.use('/farmer', farmerRouter);
app.use('/verify', verifyRouter);


cron.schedule("0 */6 * * *", async () => {
    console.log("🔄 Fetching and updating market price data...");
    await updateMarketPrices();
});


app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`)
})