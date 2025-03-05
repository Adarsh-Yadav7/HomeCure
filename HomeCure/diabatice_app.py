# from flask import Flask, request, jsonify
# from flask_cors import CORS  # Import CORS
# import joblib
# import pandas as pd

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# # Load the trained model
# model = joblib.load('model.pkl')

# @app.route('/')
# def home():
#     return "Diabetes Prediction API is running!"

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Get JSON data from request
#         data = request.json

#         # Convert input to DataFrame
#         df = pd.DataFrame([data])

#         # Make prediction
#         prediction = model.predict(df)

#         # Return result
#         result = {"diabetes_prediction": int(prediction[0])}
#         return jsonify(result)

#     except Exception as e:
#         return jsonify({"error": str(e)})

# # if __name__ == '__main__':
# #     app.run(debug=True)
# if __name__ == '__main__':
#     app.run(debug=True, port=5004)  # 🛠 Changed to 5004



from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
model = joblib.load('model.pkl')

@app.route('/')
def home():
    return "Diabetes Prediction API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json

        # Print received data for debugging
        print("Received data:", data)

        # Define expected feature names (should match model training)
        expected_features = ["Age", "Height", "Weight", "Exercise_Level", "Family_History", "Diet_Type", "Thirst", "Frequent_Urination"]

        # Rename JS feature names to match model feature names
        feature_mapping = {
            "Exercise Level": "Exercise_Level",
            "Family History": "Family_History",
            "Diet Type": "Diet_Type",
            "Frequent Urination": "Frequent_Urination"
        }

        # Rename fields if necessary
        formatted_data = {feature_mapping.get(k, k): v for k, v in data.items()}

        # Ensure all expected features are present
        for feature in expected_features:
            if feature not in formatted_data:
                return jsonify({"error": f"Missing feature: {feature}"}), 400

        # Convert input to DataFrame
        df = pd.DataFrame([formatted_data])

        # Make prediction
        prediction = model.predict(df)

        # Return result
        result = {"diabetes_prediction": int(prediction[0])}
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5004)
