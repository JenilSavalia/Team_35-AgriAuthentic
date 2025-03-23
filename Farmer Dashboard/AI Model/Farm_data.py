from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
import random
import time
from threading import Thread
from collections import deque

app = FastAPI()

# CORS Middleware
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Change this in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Declaring Global Variables
valid_time = 0
certification_status = "Not Certified"
certification_reason = "Not Sufficient Data"
current_failures = []
farmer_dashboard = {
    "certification_status": certification_status,
    "certification_reason": certification_reason
}
data_history = deque(maxlen=30)

# Function to generate Random Sensor Data
def generate_random_sensor_data():
    sensor_data = {
        "pH": round(random.uniform(6, 8), 2),
        "temperature": round(random.uniform(10, 25), 2),
        "soil_moisture": round(random.uniform(0, 100), 2),
        "ec": round(random.uniform(1, 2.2), 2),
        "nitrogen": round(random.uniform(15, 35), 2),
        "phosphorus": round(random.uniform(8, 32), 2),
        "potassium": round(random.uniform(90, 260), 2),
        "water_tds": round(random.uniform(90, 150), 2),
    }
    return sensor_data

# Function to Validate Farming Conditions
def validate_farming_conditions(sensor_data):
    global valid_time, certification_status, certification_reason, current_failures
    all_valid = True
    failures = []

    # Validation conditions
    thresholds = {
        "soil_moisture": (30, 70),
        "temperature": (15, 30),
        "pH": (6.5, 7.5),
        "ec": (1.2, 2.0),
        "nitrogen": (20, 40),
        "phosphorus": (10, 30),
        "potassium": (100, 250),
        "water_tds": (100, 500)
    }

    for key, (min_val, max_val) in thresholds.items():
        value = sensor_data[key]
        if value < min_val:
            failures.append((key, "low"))
            all_valid = False
        elif value > max_val:
            failures.append((key, "high"))
            all_valid = False

    current_failures = failures

    if all_valid:
        valid_time += 1
    else:
        valid_time = 0
        certification_reason = "Issues detected: " + ", ".join([f"{key.replace('_', ' ').title()} is {issue}." for key, issue in failures])

    if valid_time >= 15:
        certification_status = "✅ Level-3 Certified (Fully Verified)"
    elif valid_time >= 10:
        certification_status = "✅ Level-2 Certified (Partially Verified)"
    elif valid_time >= 5:
        certification_status = "✅ Level-1 Certified (Primary Certification)"
    else:
        certification_status = "❌ Not Certified"

    farmer_dashboard["certification_status"] = certification_status
    farmer_dashboard["certification_reason"] = certification_reason

    return farmer_dashboard, failures

# AI Suggestion Generator
def generate_ai_suggestions(failures):
    advice = {
        "pH": {
            "low": "Add lime to increase soil pH",
            "high": "Apply sulfur to lower pH"
        },
        "temperature": {
            "low": "Use row covers to retain heat",
            "high": "Provide shade cooling"
        },
        "soil_moisture": {
            "low": "Increase irrigation to maintain soil moisture",
            "high": "Improve drainage to reduce waterlogging"
        },
        "ec": {
            "low": "Add fertilizers to increase nutrient levels",
            "high": "Leach soil to reduce salt concentration"
        },
        "nitrogen": {
            "low": "Apply nitrogen-rich fertilizers",
            "high": "Reduce nitrogen application"
        },
        "phosphorus": {
            "low": "Add phosphorus-rich fertilizers",
            "high": "Reduce phosphorus application"
        },
        "potassium": {
            "low": "Apply potassium-rich fertilizers",
            "high": "Reduce potassium application"
        },
        "water_tds": {
            "low": "Check water source for low mineral content",
            "high": "Use filtered water to reduce TDS"
        }
    }
    return [advice.get(param, {}).get(issue, f"Check {param.replace('_', ' ')}") for param, issue in failures]

# Real-time sensor data update thread
def update_sensor_data():
    while True:
        sensor_data = generate_random_sensor_data()
        validate_farming_conditions(sensor_data)
        data_history.append(sensor_data)

        print("\n📡 Sensor Data Update:", sensor_data)
        print("📜 Certification Status:", certification_status)
        print("-" * 50)

        time.sleep(10)

# API Endpoint to Get Sensor Data
@app.get('/api/sensor_data')
async def get_sensor_data():
    latest_data = list(data_history)[-1] if data_history else {}
    return JSONResponse(content={
        "sensor_data": latest_data,
        "sensor_history": list(data_history),
        "certification_status": certification_status,
        "certification_reason": certification_reason,
        "certification_percent": min((valid_time / 15) * 100, 100),
        "suggestions": generate_ai_suggestions(current_failures)
    })

# Start the sensor data update thread
thread = Thread(target=update_sensor_data)
thread.daemon = True
thread.start()

if __name__ == "__main__":
    uvicorn.run("Farm_data:app", host="0.0.0.0", port=5000, reload=True)