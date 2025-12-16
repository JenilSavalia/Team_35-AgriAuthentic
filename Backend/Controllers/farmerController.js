import { Farmer } from '../models/Farmer.js';


export const registerFarmer = async (req, res) => {
    try {
      const { googleId, farmerEmail, imageLink } = req.body;
  
      // Check if farmer already exists
      const existingFarmer = await Farmer.findOne({ farmerEmail });
      if (existingFarmer) {
        return res.status(400).json({
          success: false,
          message: 'Farmer with this email already exists'
        });
      }
      console.log(googleId)
      console.log(farmerEmail)
      console.log(imageLink)
      // Create a new farmer
      if (farmerEmail) {
        const farmer = new Farmer({
          googleId,
          farmerEmail,
          imageLink,
        });
  
        await farmer.save();
  
        res.status(201).json(farmer);
      }
      else {
        res.status(400).json({
          success: false,
          message: 'Farmer email is required'
        })
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error registering farmer',
        error: error.message
      });
    }
  };

  export const getFarmerById = async (req, res) => {
    try {
      const { id } = req.params;
  
      console.log("Received ID:", id);  
      console.log("Type of ID:", typeof id);  
  
      
      const farmer = await Farmer.findOne({ googleId: id }, { _id: 0 }).exec();
  
      if (!farmer) {
        return res.status(404).json({
          success: false,
          message: 'Farmer not found'
        });
      }
  
      res.json({
        success: true,
        data: farmer
      });
    } catch (error) {
      console.error("Error fetching farmer:", error); 
  
      res.status(500).json({
        success: false,
        message: 'Error fetching farmer',
        error: error.message
      });
    }
  };

export const getAllFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find({});

    res.json(farmers);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching farmers',
      error: error.message
    });
  }
};

export const farmer_profile_setup = async (req, res) => {
    try {
      const { farmerName, farmerPhone, farmerAddress, farmAddress, farmSizes, totalFarms, primaryCrops, subscriptionModel, googleId } = req.body;
  
      if (!googleId) {
        return res.status(400).json({ message: "Google ID is required" });
      }
  
     
      const farmerProfile = await Farmer.findOneAndUpdate({ googleId:googleId }, {
        farmerName,
        farmerPhone,
        farmerAddress,
        farmAddress,
        farmSizes,
        totalFarms,
        primaryCrops,
        subscriptionModel,
        profileSetup: true
      }, { new: true, runValidators: true });
  
      res.status(200).json({ message: "Profile created successfully", farmerProfile });
  
    } catch (error) {
      console.error("Error in farmer profile setup:", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  };