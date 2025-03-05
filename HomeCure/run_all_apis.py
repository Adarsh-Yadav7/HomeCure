from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import google.generativeai as genai

# ---------------- API 1: Baby Gender Prediction ----------------
app1 = Flask(__name__)
CORS(app1)

model = joblib.load("baby_gender_model.pkl")
label_encoders = joblib.load("baby_gender_label_encoders.pkl")
scaler = joblib.load("baby_gender_scaler.pkl")

@app1.route('/predict_gender', methods=['POST'])
def predict_gender():
    try:
        data = request.json
        feature_names = ["Cravings", "Morning_Sickness", "Mood_Swings", "Weight", "Height", "Age"]
        encoded_features = [
            label_encoders[f].transform([data[f]])[0] if f in label_encoders else float(data[f])
            for f in feature_names
        ]
        input_scaled = scaler.transform([encoded_features])
        prediction = model.predict(input_scaled)[0]
        predicted_gender = label_encoders["Gender"].inverse_transform([prediction])[0]
        return jsonify({"Predicted_Gender": predicted_gender})
    except Exception as e:
        return jsonify({"error": str(e)})

# ---------------- API 2: Chatbot (Gemini AI) ----------------
app2 = Flask(__name__)
CORS(app2)

GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"
genai.configure(api_key=GEMINI_API_KEY)

@app2.route('/chat', methods=['POST'])
def chat():
    try:
        user_message = request.json.get("message")
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(user_message)
        return jsonify({"response": response.text})
    except Exception as e:
        return jsonify({"response": "Error: " + str(e)})

# ---------------- API 3: Diabetes Prediction ----------------
app3 = Flask(__name__)
CORS(app3)

diabetes_model = joblib.load("diabetes_model.pkl")

@app3.route('/predict', methods=['POST'])
def predict_diabetes():
    try:
        data = request.json
        features = pd.DataFrame([data])
        prediction = diabetes_model.predict(features)[0]
        result = "Diabetes Detected" if prediction == 1 else "No Diabetes"
        return jsonify({"prediction": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# ---------------- API 4: Health Resources ----------------
app4 = Flask(__name__)
CORS(app4)

health_resources = [
    {"title": "Healthy Diet Tips", "type": "article", "content": "https://www.healthline.com/nutrition/healthy-eating-tips", "category": "Nutrition"},
    {"title": "Exercise for Heart Health", "type": "video", "content": "https://youtu.be/rtps8NCZTm8", "category": "Fitness"},
]

@app4.route('/api/health', methods=['GET'])
def get_health_resources():
    return jsonify(health_resources)

# ---------------- API 5: Duplicate Health Resources API ----------------
app5 = Flask(__name__)
CORS(app5)

@app5.route('/api/health', methods=['GET'])
def get_resources():
    return jsonify(health_resources)

# ---------------- Run All APIs ----------------
if __name__ == '__main__':
    import threading

    threading.Thread(target=lambda: app1.run(port=5003, debug=True, use_reloader=False)).start()
    threading.Thread(target=lambda: app2.run(port=5004, debug=True, use_reloader=False)).start()
    threading.Thread(target=lambda: app3.run(port=5005, debug=True, use_reloader=False)).start()
    threading.Thread(target=lambda: app4.run(port=5006, debug=True, use_reloader=False)).start()
    threading.Thread(target=lambda: app5.run(port=5007, debug=True, use_reloader=False)).start()
