
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load the trained model, encoders, and scaler
model = joblib.load("baby_gender_model.pkl")
label_encoders = joblib.load("baby_gender_label_encoders.pkl")
scaler = joblib.load("baby_gender_scaler.pkl")

@app.route('/predict_gender', methods=['POST'])
def predict_gender():
    try:
        data = request.json  # Get user input from request
        
        # Define feature names
        feature_names = ["Cravings", "Morning_Sickness", "Mood_Swings", "Weight", "Height", "Age"]
        numerical_features = ["Weight", "Height", "Age"]

        # Encode categorical features
        encoded_features = []
        for feature in feature_names:
            if feature in label_encoders:  # Encode categorical features
                if data[feature] in label_encoders[feature].classes_:
                    encoded_features.append(label_encoders[feature].transform([data[feature]])[0])
                else:
                    return jsonify({"error": f"Invalid value for {feature}: {data[feature]}. Expected: {list(label_encoders[feature].classes_)}"})
            else:  # Add numerical features
                encoded_features.append(float(data[feature]))

        # Convert to numpy array and reshape
        input_array = np.array([encoded_features]).reshape(1, -1)

        # Scale numerical inputs
        input_scaled = scaler.transform(input_array)

        # Predict gender
        prediction = model.predict(input_scaled)[0]
        predicted_gender = label_encoders["Gender"].inverse_transform([prediction])[0]

        return jsonify({"Predicted_Gender": predicted_gender})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5003)  # Running on port 5003
