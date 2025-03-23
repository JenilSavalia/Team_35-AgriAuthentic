import express from 'express';
import {
  
  getConsumerOrders,
  getOrderDetails,
  getOrderStatus,
  getOrdersByFarmerId,
  getOrdersByConsumerId,
  confirmOrder,
  createOrderFromBasket
  
} from '../Controllers/orderController.js';



const router = express.Router();

router.post('/', createOrderFromBasket);

router.get('/my-orders', getConsumerOrders);

router.get('/:orderId', getOrderDetails);

router.get('/:orderId/status', getOrderStatus);

router.get('/farmer/:farmerId', getOrdersByFarmerId);

router.get('/consumer/:consumerId', getOrdersByConsumerId);

router.post("/confirm", confirmOrder);


export default router;