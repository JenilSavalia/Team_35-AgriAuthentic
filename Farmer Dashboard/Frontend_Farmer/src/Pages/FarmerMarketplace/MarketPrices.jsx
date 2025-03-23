import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Clock, AlertCircle } from 'lucide-react';

const Marketprice = () => {
  // Sample data provided
  const cropData = [
    {
        "_id": "Lentil (Masur)(Whole)",
        "maxRecentPrice": 10600,
        "latestMarket": "Udaipura",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pineapple",
        "maxRecentPrice": 42080,
        "latestMarket": "Palampur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cluster beans",
        "maxRecentPrice": 28880,
        "latestMarket": "Thrippunithura",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Spinach",
        "maxRecentPrice": 3000,
        "latestMarket": "Ladwa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Onion Green",
        "maxRecentPrice": 3000,
        "latestMarket": "Shrirampur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Kabuli Chana(Chickpeas-White)",
        "maxRecentPrice": 14000,
        "latestMarket": "Modasa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bottle gourd",
        "maxRecentPrice": 5500,
        "latestMarket": "Surat",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cucumbar(Kheera)",
        "maxRecentPrice": 28880,
        "latestMarket": "Surat",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bengal Gram(Gram)(Whole)",
        "maxRecentPrice": 10000,
        "latestMarket": "Sami",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Arhar (Tur/Red Gram)(Whole)",
        "maxRecentPrice": 13000,
        "latestMarket": "Jetpur(Dist.Rajkot)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Round gourd",
        "maxRecentPrice": 2000,
        "latestMarket": "Nawan Shahar(Subzi Mandi)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Wood",
        "maxRecentPrice": 8200,
        "latestMarket": "Babrala",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Barley (Jau)",
        "maxRecentPrice": 2640,
        "latestMarket": "Rasda",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chapparad Avare",
        "maxRecentPrice": 3400,
        "latestMarket": "Malur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Corriander seed",
        "maxRecentPrice": 21000,
        "latestMarket": "Rajkot",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Guava",
        "maxRecentPrice": 8600,
        "latestMarket": "Gondal(Veg.market Gondal)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Nutmeg",
        "maxRecentPrice": 28000,
        "latestMarket": "Thrissur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Sponge gourd",
        "maxRecentPrice": 5200,
        "latestMarket": "Sriganganagar (F&V)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "BOP",
        "maxRecentPrice": 50,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Jute",
        "maxRecentPrice": 6000,
        "latestMarket": "Jiaganj",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Peas Wet",
        "maxRecentPrice": 7000,
        "latestMarket": "Narwana",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cock",
        "maxRecentPrice": 360,
        "latestMarket": "Boxonagar",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Amaranthus",
        "maxRecentPrice": 48080,
        "latestMarket": "Angamaly",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ghee",
        "maxRecentPrice": 53880,
        "latestMarket": "Udaipur (Grain)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Raddish",
        "maxRecentPrice": 2800,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Rubber",
        "maxRecentPrice": 18000,
        "latestMarket": "Kalpetta",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lime",
        "maxRecentPrice": 10000,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Amla(Nelli Kai)",
        "maxRecentPrice": 9000,
        "latestMarket": "Malerkotla",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Coriander(Leaves)",
        "maxRecentPrice": 13700,
        "latestMarket": "Padra",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Garlic",
        "maxRecentPrice": 168080,
        "latestMarket": "Ambala Cantt.",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lak(Teora)",
        "maxRecentPrice": 3740,
        "latestMarket": "Bina",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Fish",
        "maxRecentPrice": 31000,
        "latestMarket": "Sonamura",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Turmeric",
        "maxRecentPrice": 24000,
        "latestMarket": "Chintapally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chilly Capsicum",
        "maxRecentPrice": 6000,
        "latestMarket": "Ramanagara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Seetapal",
        "maxRecentPrice": 6000,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chrysanthemum(Loose)",
        "maxRecentPrice": 40,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mango",
        "maxRecentPrice": 80000,
        "latestMarket": "Kangra",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Gram Raw(Chholia)",
        "maxRecentPrice": 800,
        "latestMarket": "Barwala(Hisar)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pumpkin",
        "maxRecentPrice": 12080,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Paddy(Dhan)(Common)",
        "maxRecentPrice": 3250,
        "latestMarket": "Pulpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Marigold(loose)",
        "maxRecentPrice": 2400,
        "latestMarket": "Jodhpur(F&V)(Paota)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Jarbara",
        "maxRecentPrice": 4,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Tender Coconut",
        "maxRecentPrice": 6800,
        "latestMarket": "Narnaul",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ridgeguard(Tori)",
        "maxRecentPrice": 8000,
        "latestMarket": "Hansi",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Grapes",
        "maxRecentPrice": 17000,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Green Peas",
        "maxRecentPrice": 22500,
        "latestMarket": "Lashkar",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Guar Seed(Cluster Beans Seed)",
        "maxRecentPrice": 5200,
        "latestMarket": "Jodhpur (Grain)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ragi (Finger Millet)",
        "maxRecentPrice": 5000,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Apple",
        "maxRecentPrice": 24000,
        "latestMarket": "Vadhvan",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Black Gram Dal (Urd Dal)",
        "maxRecentPrice": 15000,
        "latestMarket": "Shimoga",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Black pepper",
        "maxRecentPrice": 90000,
        "latestMarket": "Thalasserry",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cowpea (Lobia/Karamani)",
        "maxRecentPrice": 10000,
        "latestMarket": "Palakkad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Water chestnut",
        "maxRecentPrice": 17755,
        "latestMarket": "Sehora",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Turmeric (raw)",
        "maxRecentPrice": 12000,
        "latestMarket": "Surat",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mint(Pudina)",
        "maxRecentPrice": 8000,
        "latestMarket": "Rahata",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Methi(Leaves)",
        "maxRecentPrice": 3000,
        "latestMarket": "Chhachrauli",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Season Leaves",
        "maxRecentPrice": 800,
        "latestMarket": "Mandi(Takoli)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Tinda",
        "maxRecentPrice": 6500,
        "latestMarket": "Vadhvan",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cardamoms",
        "maxRecentPrice": 225000,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Karbuja(Musk Melon)",
        "maxRecentPrice": 6000,
        "latestMarket": "Patran",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Knool Khol",
        "maxRecentPrice": 2000,
        "latestMarket": "Batote",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "French Beans (Frasbean)",
        "maxRecentPrice": 72080,
        "latestMarket": "Kangra(Baijnath)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cowpea(Veg)",
        "maxRecentPrice": 54080,
        "latestMarket": "Kayamkulam",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Little gourd (Kundru)",
        "maxRecentPrice": 8000,
        "latestMarket": "Cherthala",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Jack Fruit",
        "maxRecentPrice": 4000,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Papaya",
        "maxRecentPrice": 6000,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Tamarind Fruit",
        "maxRecentPrice": 22000,
        "latestMarket": "Alirajpur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "White Pumpkin",
        "maxRecentPrice": 1600,
        "latestMarket": "Bowenpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mango (Raw-Ripe)",
        "maxRecentPrice": 48080,
        "latestMarket": "Thrippunithura",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Almond(Badam)",
        "maxRecentPrice": 110000,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Coconut Oil",
        "maxRecentPrice": 29900,
        "latestMarket": "Kanjangadu",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pointed gourd (Parval)",
        "maxRecentPrice": 12500,
        "latestMarket": "Nagpur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Dry Chillies",
        "maxRecentPrice": 25000,
        "latestMarket": "Rajkot",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ashgourd",
        "maxRecentPrice": 72080,
        "latestMarket": "Kayamkulam",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Carrot",
        "maxRecentPrice": 60080,
        "latestMarket": "Samalkha",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Onion",
        "maxRecentPrice": 48080,
        "latestMarket": "Jetpur(Dist.Rajkot)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Elephant Yam (Suran)",
        "maxRecentPrice": 7500,
        "latestMarket": "Palakkad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Methi Seeds",
        "maxRecentPrice": 9000,
        "latestMarket": "Jaora",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Firewood",
        "maxRecentPrice": 350,
        "latestMarket": "Kadaura",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Surat Beans (Papadi)",
        "maxRecentPrice": 11000,
        "latestMarket": "Mansa(Manas Veg Yard)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Suvarna Gadde",
        "maxRecentPrice": 4000,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Amranthas Red",
        "maxRecentPrice": 2000,
        "latestMarket": "Kottakkal",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Anthorium",
        "maxRecentPrice": 60,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chikoos(Sapota)",
        "maxRecentPrice": 7000,
        "latestMarket": "Sirsa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Rajgir",
        "maxRecentPrice": 8,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Groundnut",
        "maxRecentPrice": 9619,
        "latestMarket": "Wanaparthy town",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Peas cod",
        "maxRecentPrice": 4200,
        "latestMarket": "Solan(Nalagarh)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Wheat",
        "maxRecentPrice": 6000,
        "latestMarket": "Jetpur(Dist.Rajkot)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Seemebadnekai",
        "maxRecentPrice": 2000,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ginger(Green)",
        "maxRecentPrice": 66080,
        "latestMarket": "Rajkot(Veg.Sub Yard)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Calendula",
        "maxRecentPrice": 90,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "White Peas",
        "maxRecentPrice": 4620,
        "latestMarket": "Lucknow",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bitter gourd",
        "maxRecentPrice": 54080,
        "latestMarket": "Ramanagara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Thondekai",
        "maxRecentPrice": 4000,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Alsandikai",
        "maxRecentPrice": 4500,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Groundnut pods (raw)",
        "maxRecentPrice": 4000,
        "latestMarket": "Bowenpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Green Gram Dal (Moong Dal)",
        "maxRecentPrice": 14000,
        "latestMarket": "Jahangirabad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Groundnut (Split)",
        "maxRecentPrice": 6005,
        "latestMarket": "Visavadar",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ginger(Dry)",
        "maxRecentPrice": 48500,
        "latestMarket": "Ladwa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pepper ungarbled",
        "maxRecentPrice": 65000,
        "latestMarket": "Pulpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cow",
        "maxRecentPrice": 45000,
        "latestMarket": "Kalyan",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Field Pea",
        "maxRecentPrice": 5000,
        "latestMarket": "Narwal Jammu (F&V)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Soanf",
        "maxRecentPrice": 21255,
        "latestMarket": "Modasa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Yam",
        "maxRecentPrice": 6500,
        "latestMarket": "Sasthamkotta",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Millets",
        "maxRecentPrice": 3175,
        "latestMarket": "Veraval",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Moath Dal",
        "maxRecentPrice": 4600,
        "latestMarket": "Barmer",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Peas(Dry)",
        "maxRecentPrice": 6950,
        "latestMarket": "Kurara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chili Red",
        "maxRecentPrice": 31100,
        "latestMarket": "Palakkad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Green Gram (Moong)(Whole)",
        "maxRecentPrice": 13000,
        "latestMarket": "Palakkad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cummin Seed(Jeera)",
        "maxRecentPrice": 35000,
        "latestMarket": "Jetpur(Dist.Rajkot)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mashrooms",
        "maxRecentPrice": 15000,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Sweet Potato",
        "maxRecentPrice": 5000,
        "latestMarket": "Manjeswaram",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Plum",
        "maxRecentPrice": 10000,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Potato",
        "maxRecentPrice": 27080,
        "latestMarket": "Gurgaon",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Indian Beans (Seam)",
        "maxRecentPrice": 8400,
        "latestMarket": "Padra",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Capsicum",
        "maxRecentPrice": 42080,
        "latestMarket": "Narnaul",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Alasande Gram",
        "maxRecentPrice": 6700,
        "latestMarket": "Haliyala",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Green Chilli",
        "maxRecentPrice": 24080,
        "latestMarket": "Gondal(Veg.market Gondal)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Castor Seed",
        "maxRecentPrice": 6325,
        "latestMarket": "Rajkot",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Kinnow",
        "maxRecentPrice": 7500,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Squash(Chappal Kadoo)",
        "maxRecentPrice": 2500,
        "latestMarket": "Ahmedgarh",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Rice",
        "maxRecentPrice": 7500,
        "latestMarket": "Shimoga",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Copra",
        "maxRecentPrice": 16500,
        "latestMarket": "Payyannur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Brinjal",
        "maxRecentPrice": 28880,
        "latestMarket": "Rajkot(Veg.Sub Yard)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Kulthi(Horse Gram)",
        "maxRecentPrice": 6000,
        "latestMarket": "Beawar",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mustard Oil",
        "maxRecentPrice": 16000,
        "latestMarket": "Baraut",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Sesamum(Sesame,Gingelly,Til)",
        "maxRecentPrice": 17000,
        "latestMarket": "Jetpur(Dist.Rajkot)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Jowar(Sorghum)",
        "maxRecentPrice": 6000,
        "latestMarket": "Shimoga",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Turnip",
        "maxRecentPrice": 1700,
        "latestMarket": "Hamirpur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Beans",
        "maxRecentPrice": 8200,
        "latestMarket": "Malur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Gur(Jaggery)",
        "maxRecentPrice": 10400,
        "latestMarket": "Malur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Kutki",
        "maxRecentPrice": 3000,
        "latestMarket": "Dindori",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Chow Chow",
        "maxRecentPrice": 1000,
        "latestMarket": "Bowenpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mustard",
        "maxRecentPrice": 8000,
        "latestMarket": "Halvad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Coconut Seed",
        "maxRecentPrice": 7200,
        "latestMarket": "Chelakkara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cinamon(Dalchini)",
        "maxRecentPrice": 75000,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Beetroot",
        "maxRecentPrice": 42080,
        "latestMarket": "Narwal Jammu (F&V)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Banana",
        "maxRecentPrice": 7700,
        "latestMarket": "Ambala Cantt.",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mousambi(Sweet Lime)",
        "maxRecentPrice": 7350,
        "latestMarket": "Narnaul",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Guar",
        "maxRecentPrice": 13600,
        "latestMarket": "Ratnagiri (Nachane)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Rose(Loose))",
        "maxRecentPrice": 10000,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Isabgul (Psyllium)",
        "maxRecentPrice": 14030,
        "latestMarket": "Jodhpur (Grain)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lemon",
        "maxRecentPrice": 15000,
        "latestMarket": "North Paravur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bengal Gram Dal (Chana Dal)",
        "maxRecentPrice": 11000,
        "latestMarket": "Baraut",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bunch Beans",
        "maxRecentPrice": 3200,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Long Melon(Kakri)",
        "maxRecentPrice": 13000,
        "latestMarket": "Manjeswaram",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Kodo Millet(Varagu)",
        "maxRecentPrice": 2400,
        "latestMarket": "Mohgaon",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Maize",
        "maxRecentPrice": 3900,
        "latestMarket": "Khedbrahma",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ground Nut Seed",
        "maxRecentPrice": 12500,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Yam (Ratalu)",
        "maxRecentPrice": 6000,
        "latestMarket": "Warangal",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Masur Dal",
        "maxRecentPrice": 10000,
        "latestMarket": "Baraut",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lotus Sticks",
        "maxRecentPrice": 7000,
        "latestMarket": "Narwal Jammu (F&V)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Black Gram (Urd Beans)(Whole)",
        "maxRecentPrice": 13000,
        "latestMarket": "Satna",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Orange",
        "maxRecentPrice": 12000,
        "latestMarket": "Ladwa",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bajra(Pearl Millet/Cumbu)",
        "maxRecentPrice": 4500,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Sweet Pumpkin",
        "maxRecentPrice": 2200,
        "latestMarket": "Jalalabad",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Leafy Vegetable",
        "maxRecentPrice": 10000,
        "latestMarket": "Barwala(Hisar)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Sugar",
        "maxRecentPrice": 4700,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Ber(Zizyphus/Borehannu)",
        "maxRecentPrice": 4500,
        "latestMarket": "Bhawanigarh",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pepper garbled",
        "maxRecentPrice": 63000,
        "latestMarket": "Manjeswaram",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Tomato",
        "maxRecentPrice": 24080,
        "latestMarket": "Navsari",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cotton",
        "maxRecentPrice": 8075,
        "latestMarket": "Rajkot",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lukad",
        "maxRecentPrice": 3000,
        "latestMarket": "Thanabhavan",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cauliflower",
        "maxRecentPrice": 27580,
        "latestMarket": "Surat",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Banana - Green",
        "maxRecentPrice": 39080,
        "latestMarket": "Vadhvan",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Paddy(Dhan)(Basmati)",
        "maxRecentPrice": 3800,
        "latestMarket": "Buland Shahr",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pear(Marasebu)",
        "maxRecentPrice": 7500,
        "latestMarket": "Pune",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cabbage",
        "maxRecentPrice": 30080,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Lilly",
        "maxRecentPrice": 32,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Colacasia",
        "maxRecentPrice": 45080,
        "latestMarket": "Manjeri",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Rayee",
        "maxRecentPrice": 5650,
        "latestMarket": "Mohgaon",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Mataki",
        "maxRecentPrice": 8000,
        "latestMarket": "Kalagategi",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Water Melon",
        "maxRecentPrice": 3000,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Neem Seed",
        "maxRecentPrice": 2500,
        "latestMarket": "Gandhwani",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Tapioca",
        "maxRecentPrice": 14080,
        "latestMarket": "Mazhuvannur VFPCK",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Drumstick",
        "maxRecentPrice": 21080,
        "latestMarket": "Shimoga",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Coffee",
        "maxRecentPrice": 27000,
        "latestMarket": "Pulpally",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Jaffri",
        "maxRecentPrice": 15,
        "latestMarket": "Flower Market,Gazipur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Duster Beans",
        "maxRecentPrice": 8000,
        "latestMarket": "Chelakkara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Bhindi(Ladies Finger)",
        "maxRecentPrice": 39080,
        "latestMarket": "Navsari",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Arhar Dal(Tur Dal)",
        "maxRecentPrice": 19000,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Snakeguard",
        "maxRecentPrice": 28880,
        "latestMarket": "Mannar",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Indian Colza(Sarson)",
        "maxRecentPrice": 2200,
        "latestMarket": "Kangra(Jaisinghpur)",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Linseed",
        "maxRecentPrice": 5301,
        "latestMarket": "Mandla",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Cashewnuts",
        "maxRecentPrice": 110000,
        "latestMarket": "Mumbai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Green Avare (W)",
        "maxRecentPrice": 6900,
        "latestMarket": "Binny Mill (F&V), Bangalore",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Coconut",
        "maxRecentPrice": 7700,
        "latestMarket": "Ettumanoor",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pegeon Pea (Arhar Fali)",
        "maxRecentPrice": 7000,
        "latestMarket": "Surat",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Arecanut(Betelnut/Supari)",
        "maxRecentPrice": 38400,
        "latestMarket": "Kuthuparambu",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Pomegranate",
        "maxRecentPrice": 20000,
        "latestMarket": "Barara",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Papaya (Raw)",
        "maxRecentPrice": 3800,
        "latestMarket": "Kottakkal",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Soyabean",
        "maxRecentPrice": 4401,
        "latestMarket": "Alirajpur",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "buttery",
        "maxRecentPrice": 5470,
        "latestMarket": "Khurai",
        "latestDate": "2025-03-19T18:30:00.000Z"
    },
    {
        "_id": "Amphophalus",
        "maxRecentPrice": 54080,
        "latestMarket": "Mukkom",
        "latestDate": "2025-03-19T18:30:00.000Z"
    }
]

  // Get unique markets from the data
  const uniqueMarkets = [...new Set(cropData.map(item => item.latestMarket))];
  
  // States for selected crop and market
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [marketInsight, setMarketInsight] = useState("");

  // Generate predictions based on selection
  useEffect(() => {
    // Clear predictions if both are empty
    if (!selectedCrop && !selectedMarket) {
      setPredictions([]);
      setMarketInsight("");
      return;
    }

    let cropsToProcess = [];

    // If market is selected, get all crops from that market
    if (selectedMarket) {
      cropsToProcess = cropData.filter(crop => crop.latestMarket === selectedMarket);
    } 
    // If only crop is selected, get just that crop
    else if (selectedCrop) {
      cropsToProcess = cropData.filter(crop => crop._id === selectedCrop);
    }

    // Generate predictions for all relevant crops
    const newPredictions = cropsToProcess.map(cropInfo => {
      const currentPrice = cropInfo.maxRecentPrice;
      
      // Generate random percentage for price change
      const percentChange = Math.floor(Math.random() * 15) + 1;
      
      // Determine if prices will rise or fall
      const isIncrease = Math.random() > 0.5;
      
      // Generate future date for best selling time
      const today = new Date();
      const bestTimeToSell = Math.random() > 0.3 ? 
        new Date(today.setDate(today.getDate() + Math.floor(Math.random() * 30))) : 
        "Now";
      
      // Create prediction object
      return {
        name: cropInfo._id,
        market: cropInfo.latestMarket,
        currentPrice: currentPrice,
        percentChange: percentChange,
        isIncrease: isIncrease,
        predictedPrice: isIncrease 
          ? Math.floor(currentPrice * (1 + percentChange/100)) 
          : Math.floor(currentPrice * (1 - percentChange/100)),
        bestTimeToSell: bestTimeToSell
      };
    });
    
    setPredictions(newPredictions);
    
    // Generate market insight based on selection
    if (newPredictions.length > 0) {
      const insightTarget = selectedCrop || (selectedMarket ? `crops in ${selectedMarket}` : "crops");
      
      const insights = [
        `${insightTarget} prices expected to rise due to export policy changes. Consider holding your stock for 3-4 weeks.`,
        `${insightTarget} demand is increasing due to upcoming festival season. Prices may peak in 2 weeks.`,
        `${insightTarget} supplies are abundant this season. Selling early might be advantageous.`,
        `Weather conditions may affect ${insightTarget} transportation. Market prices might fluctuate in coming days.`
      ];
      
      setMarketInsight(insights[Math.floor(Math.random() * insights.length)]);
    }
  }, [selectedCrop, selectedMarket]);

  // Handle crop selection
  const handleCropChange = (e) => {
    const crop = e.target.value;
    setSelectedCrop(crop);
    
    // If crop is selected, clear market selection to avoid confusion
    if (crop) {
      setSelectedMarket("");
    }
  };

  // Handle market selection
  const handleMarketChange = (e) => {
    const market = e.target.value;
    setSelectedMarket(market);
    
    // If market is selected, clear crop selection to avoid confusion
    if (market) {
      setSelectedCrop("");
    }
  };

  // Format date to display only day and month
  const formatDate = (dateString) => {
    if (dateString === "Now") return "Now";
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">AI Market Price Prediction</h1>
        
        {/* Selection Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-sm text-gray-600 mb-4">Select either a specific crop OR a market to see predictions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Crop</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedCrop}
                onChange={handleCropChange}
                disabled={selectedMarket !== ""}
              >
                <option value="">-- Select Crop --</option>
                {cropData.map(crop => (
                  <option key={crop._id} value={crop._id}>{crop._id}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Market</label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selectedMarket}
                onChange={handleMarketChange}
                disabled={selectedCrop !== ""}
              >
                <option value="">-- Select Market --</option>
                {uniqueMarkets.map(market => (
                  <option key={market} value={market}>{market}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Predictions */}
        {predictions.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              {selectedMarket ? `Predictions for ${selectedMarket} Market` : `Prediction for ${selectedCrop}`}
            </h2>
            
            {predictions.map((prediction, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{prediction.name}</h2>
                    {selectedCrop && <p className="text-xs text-gray-500">Market: {prediction.market}</p>}
                  </div>
                  <div className={`flex items-center ${prediction.isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                    {prediction.isIncrease ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    <span className="ml-1">{prediction.percentChange}%</span>
                  </div>
                </div>
                
                <div className="mt-2">
                  <div className="text-2xl font-bold">₹{prediction.currentPrice.toLocaleString()} <span className="text-sm font-normal text-gray-500">per quintal</span></div>
                  <div className="text-sm text-gray-600 mt-1">Predicted in 30 days: ₹{prediction.predictedPrice.toLocaleString()}</div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="text-blue-600 text-sm flex items-center">
                    <Clock size={16} className="mr-1" />
                    Best time to sell
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    prediction.bestTimeToSell === "Now" ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {formatDate(prediction.bestTimeToSell)}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Market Insight */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-start">
              <AlertCircle size={24} className="text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800">Market Insight:</h3>
                <p className="text-blue-700">{marketInsight}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* No selection message */}
        {predictions.length === 0 && (
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-gray-600">Please select either a crop OR a market to see price predictions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketprice;