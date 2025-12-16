import MarketPrice from "../models/marketSchema.js";
import fs from "fs";
import path from "path";


export const getHighestPrices = async (req, res) => {
    try {
        const highestPrices = await MarketPrice.aggregate([
            {
                $group: {
                    _id: "$Commodity",
                    highestPrice: { $max: "$Max_x0020_Price" },
                    market: { $first: "$Market" },
                    arrivalDate: { $first: "$Arrival_Date" }
                }
            }
        ]);

        if (highestPrices.length === 0) {
            return res.status(404).json({ message: "No price data found" });
        }

        res.json(highestPrices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const predictBestSellingTime = async (req, res) => {
    try {
        const pastDays = 7;
        const today = new Date();
        today.setDate(today.getDate() - pastDays); // Calculate date 7 days ago

        // Convert `Arrival_Date` to Date format in MongoDB
        const predictions = await MarketPrice.aggregate([
            {
                $match: { Arrival_Date: { $gte: today } } // Compare with Date, not string
            },
            {
                $group: {
                    _id: "$Commodity",
                    maxRecentPrice: { $max: "$Max_x0020_Price" },
                    latestMarket: { $first: "$Market" },
                    latestDate: { $first: "$Arrival_Date" }
                }
            }
        ]);

        if (predictions.length === 0) {
            return res.status(404).json({ message: "No predictions available" });
        }

        res.json(predictions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateMarketPrices = async () => {
    try {
        const filePath = path.join(process.cwd(), "data.csv"); // Replace with your actual CSV file path

        // Read and parse the CSV file (For now, assume it's an array of objects)
        const csvData = fs.readFileSync(filePath, "utf-8").split("\n").map(row => row.split(","));

        // Map CSV data to objects (Adjust according to your file format)
        const newMarketData = csvData.map(row => ({
            State: row[0],
            District: row[1],
            Market: row[2],
            Commodity: row[3],
            Variety: row[4],
            Grade: row[5],
            Arrival_Date: row[6],
            Min_x0020_Price: parseFloat(row[7]),
            Max_x0020_Price: parseFloat(row[8]),
            Modal_x0020_Price: parseFloat(row[9])
        }));

        // Remove old data and insert new
        await MarketPrice.deleteMany({});
        await MarketPrice.insertMany(newMarketData);

        console.log("✅ Market prices updated successfully!");
    } catch (error) {
        console.error("❌ Error updating market prices:", error);
    }
};
