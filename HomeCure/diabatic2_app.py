from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

# Load the trained model
model = joblib.load("diabetes_model.pkl")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

@app.route('/')
def home():
    return jsonify({"message": "Diabetes Prediction API is running!"})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.json

        # Convert input data to DataFrame
        features = pd.DataFrame([data])

        # Make prediction
        prediction = model.predict(features)[0]

        # Return the result
        result = "Diabetes Detected" if prediction == 1 else "No Diabetes"
        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 400  # Return 400 for errors

# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    app.run(debug=True, port=5004)