import express from 'express';
import {
  getAllProducts,
  getProductById,
  getVerificationDetails,
  createProduct,
  getProductsByFarmerId 
} from '../Controllers/productController.js'
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:id/verify', getVerificationDetails);
router.post('/', createProduct); 
router.get('/farmer/:farmerId', getProductsByFarmerId);


export default router;