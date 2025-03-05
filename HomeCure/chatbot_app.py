from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Replace with your actual Gemini API Key
GEMINI_API_KEY = "AIzaSyCGS72o8teyhpXI1e5dZFIF-ckSvI1fssg"
genai.configure(api_key=GEMINI_API_KEY)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")

    try:
        # Use Gemini 2.0 Flash model
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(user_message)
        
        # Extract the text response
        reply = response.text
        return jsonify({"response": reply})

    except Exception as e:
        return jsonify({"response": "Error: " + str(e)})

if __name__ == '__main__':
    app.run(debug=True)
