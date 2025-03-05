# from flask import Flask, request, jsonify
# import joblib
# import numpy as np

# # Load the trained model and encoders
# model = joblib.load("obesity_prediction_model.pkl")
# gender_encoder = joblib.load("gender_encoder.pkl")
# obesity_encoder = joblib.load("obesity_encoder.pkl")

# # Initialize Flask app
# app = Flask(__name__)

# @app.route('/')
# def home():
#     return "Obesity Prediction API is running!"

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json  # Get input from user
    
#     # Extract features from request
#     try:
#         age = float(data['Age'])
#         gender = gender_encoder.transform([data['Gender']])[0]  # Encode gender
#         height = float(data['Height'])
#         weight = float(data['Weight'])
#         bmi = float(data['BMI'])
#         physical_activity = float(data['PhysicalActivityLevel'])
#     except Exception as e:
#         return jsonify({"error": "Invalid input data", "message": str(e)})
    
#     # Prepare input array
#     input_features = np.array([[age, gender, height, weight, bmi, physical_activity]])
    
#     # Make prediction
#     prediction = model.predict(input_features)[0]
#     predicted_class = obesity_encoder.inverse_transform([prediction])[0]
    
#     return jsonify({"Obesity Prediction": predicted_class})

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the trained model
model = joblib.load("obesity_prediction_model.pkl")
gender_encoder = joblib.load("gender_encoder.pkl")
obesity_encoder = joblib.load("obesity_encoder.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        age = float(data['Age'])
        gender = gender_encoder.transform([data['Gender']])[0]
        height = float(data['Height'])
        weight = float(data['Weight'])
        bmi = float(data['BMI'])
        physical_activity = float(data['PhysicalActivityLevel'])
    except Exception as e:
        return jsonify({"error": str(e)})

    input_features = np.array([[age, gender, height, weight, bmi, physical_activity]])
    prediction = model.predict(input_features)[0]
    predicted_class = obesity_encoder.inverse_transform([prediction])[0]

    return jsonify({"Obesity Prediction": predicted_class})

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Change port if needed
