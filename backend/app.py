from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv
import logging
from logging.handlers import RotatingFileHandler

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

# Configure the Gemini API
api_key = os.getenv('GEMINI_API_KEY')
if not api_key:
    app.logger.error("GEMINI_API_KEY is not set in the environment variables.")
    raise ValueError("GEMINI_API_KEY is not set")

try:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-pro-002')
except Exception as e:
    app.logger.error(f"Error configuring Gemini API: {str(e)}")
    raise

f = open("prompt.txt", "r")
CUSTOM_PROMPT = f.read()

@app.route('/')
def home():
    app.logger.info("Home route accessed")
    return "Gemini Chatbot Backend is running!"

@app.route('/test', methods=['GET'])
def test():
    app.logger.info("Test route accessed")
    return jsonify({"message": "Backend is working correctly!"})

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        app.logger.warning("Received empty message in chat route")
        return jsonify({'error': 'No message provided'}), 400
    
    app.logger.info(f"Received message: {user_message}")
    
    try:
        # Combine the custom prompt with the user's message
        full_prompt = f"{CUSTOM_PROMPT}\n\nUser: {user_message}\nAI:"
        
        response = model.generate_content(full_prompt)
        app.logger.info("Successfully generated response from Gemini API")
        app.logger.info(f"Sending response: {response.text}")  # Log the response
        return jsonify({'reply': response.text})
    except genai.types.generation_types.BlockedPromptException as e:
        app.logger.error(f"Blocked prompt: {str(e)}")
        return jsonify({'error': 'Your message was flagged as inappropriate.'}), 400
    except Exception as e:
        app.logger.error(f"Error generating response: {str(e)}")
        return jsonify({'error': 'An error occurred while processing your request.'}), 500
if __name__ == '__main__':
    app.run(debug=True, port=5000)