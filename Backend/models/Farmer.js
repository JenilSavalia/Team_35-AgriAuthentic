import mongoose from "mongoose";

const farmerSchema = mongoose.Schema({
  googleId:{type:String,unique:true},
  imageLink:{type:String},
  farmerName: { type: String },
  farmerEmail: { type: String },
  farmerPhone: { type: Number },
  farmAddress: [{
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: Number },
    country: { type: String }
  }],
  farmerAddress: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: Number },
    country: { type: String }
  },
  farmSizes: [{ type: Number }],
  totalFarms:{type:Number},
  primaryCrops: [{ type: String }],
  profileSetup: {
    type: Boolean,
    default: false
  },
  subscriptionModel:{
    type:String
  }
});

export const Farmer = mongoose.model("Farmer", farmerSchema);