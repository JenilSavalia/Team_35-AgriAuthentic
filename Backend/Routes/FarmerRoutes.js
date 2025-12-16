import express from 'express';
import {
  registerFarmer,
  getFarmerById,
  getAllFarmers,
  farmer_profile_setup
} from '../Controllers/farmerController.js';

const router = express.Router();

router.post('/profile-setup', farmer_profile_setup);
router.post('/register', registerFarmer);
router.get('/:id', getFarmerById);
router.get('/', getAllFarmers);

export default router;