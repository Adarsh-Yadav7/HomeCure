# from flask import Flask, jsonify, request
# from flask_cors import CORS  

# app = Flask(__name__)
# CORS(app, resources={r"/api/*": {"origins": "*"}})  # ✅ Allow all origins for API calls

# # ✅ Sample health resources data
# health_resources = [
#     {"title": "Healthy Diet Tips", "type": "article", "content": "https://www.healthline.com/nutrition/healthy-eating-tips", "category": "Nutrition"},
#     {"title": "Healthy Lifestyle Tips", "type": "article", "content": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjp2rz0gOmLAxVOFYMDHbeiBIQYABACGgJzZg&co=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAi3nAX8LmU8u_Si5LAEJHEjTvcUGqcZ2FWQAgGZrESMd92nVz84YiEaAsFgEALw_wcB&ohost=www.google.com&cid=CAESVuD2ivnOM1w7EfCBlhzBCg-y35L0bchAkXmyIoSXdTof97sbus2hU0ocY1ezcLT5QmlaBMHgwa1_yufP-NkkR_P3MsvY_mI3VhWD4GVejjqWaivVYSSa&sig=AOD64_1Y_s0KyVUXIclRIveUZmjXoOYpYw&q&adurl&ved=2ahUKEwishrf0gOmLAxVRTGwGHTWgBkMQ0Qx6BAgYEAE", "category": "Nutrition"},
#     {"title": "7 Foods That Are Much Healthier Than You Thought", "type": "article", "content": "https://www.realsimple.com/foods-healthier-than-you-thought-11688865?utm_source=chatgpt.com", "category": "Nutrition"},
#     {"title": "Diet & Weight Loss", "type": "article", "content": "https://www.health.harvard.edu/topics/diet-and-weight-loss?utm_source=chatgpt.com", "category": "Nutrition"},
#     {"title": "Intuitive Eating", "type": "article", "content": "https://en.wikipedia.org/wiki/Intuitive_eating?utm_source=chatgpt.com", "category": "Nutrition"},
#     {"title": "Exercise for Heart Health", "type": "video", "content": "https://youtu.be/rtps8NCZTm8", "category": "Fitness"},
#     {"title": "10 Best Diabetes Exercises to Lower Blood Sugar", "type": "video", "content": "https://www.youtube.com/watch?pp=ygUII3N1Z2Vya2k%3D&v=-uK8a80vyeI&utm_source=chatgpt.com", "category": "Fitness"},
#     {"title": "20-Minute Full Body Strength Workout ", "type": "video", "content": "https://www.youtube.com/watch?v=Q2cMMnUuKYQ&utm_source=chatgpt.com", "category": "Fitness"},
#      {"title": "Pregnancy Workout For Beginners", "type": "video", "content": "https://www.youtube.com/watch?v=quMHccQuH6A&utm_source=chatgpt.com", "category": "Fitness"},


#     # {"title": "Diabetes Symptoms Infographic", "type": "image", "content": "", "category": "Diseases"}
# ]

# # ✅ Handle CORS Preflight (OPTIONS request)
# @app.route('/api/health', methods=['OPTIONS'])
# def handle_options():
#     response = jsonify({'message': 'CORS preflight OK'})
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
#     response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
#     return response, 200  # ✅ Ensure HTTP 200 response

# # ✅ Correctly handle POST request
# @app.route('/api/health', methods=['POST'])  
# def get_resources():
#     response = jsonify(health_resources)
#     response.headers.add("Access-Control-Allow-Origin", "*")  # ✅ Explicitly allow CORS
#     return response

# # if __name__ == '__main__':
# #     app.run(debug=True)

# if __name__ == '__main__':
#     app.run(debug=True, port=5005)  # 🛠 Changed to 5005



from flask import Flask, jsonify
from flask_cors import CORS  

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # ✅ Allow all origins for API calls

# ✅ Sample health resources data
# health_resources = [
#     {"title": "Healthy Diet Tips", "type": "article", "content": "https://www.healthline.com/nutrition/healthy-eating-tips", "category": "Nutrition"},
#     {"title": "Exercise for Heart Health", "type": "video", "content": "https://youtu.be/rtps8NCZTm8", "category": "Fitness"},
#     {"title": "20-Minute Full Body Strength Workout", "type": "video", "content": "https://www.youtube.com/watch?v=Q2cMMnUuKYQ&utm_source=chatgpt.com", "category": "Fitness"},
#     {"title": "Pregnancy Workout For Beginners", "type": "video", "content": "https://www.youtube.com/watch?v=quMHccQuH6A&utm_source=chatgpt.com", "category": "Fitness"},
# ]
health_resources = [
    {"title": "Healthy Diet Tips", "type": "article", "content": "https://www.healthline.com/nutrition/healthy-eating-tips", "category": "Nutrition"},
    {"title": "Healthy Lifestyle Tips", "type": "article", "content": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjp2rz0gOmLAxVOFYMDHbeiBIQYABACGgJzZg&co=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAi3nAX8LmU8u_Si5LAEJHEjTvcUGqcZ2FWQAgGZrESMd92nVz84YiEaAsFgEALw_wcB&ohost=www.google.com&cid=CAESVuD2ivnOM1w7EfCBlhzBCg-y35L0bchAkXmyIoSXdTof97sbus2hU0ocY1ezcLT5QmlaBMHgwa1_yufP-NkkR_P3MsvY_mI3VhWD4GVejjqWaivVYSSa&sig=AOD64_1Y_s0KyVUXIclRIveUZmjXoOYpYw&q&adurl&ved=2ahUKEwishrf0gOmLAxVRTGwGHTWgBkMQ0Qx6BAgYEAE", "category": "Nutrition"},
    {"title": "7 Foods That Are Much Healthier Than You Thought", "type": "article", "content": "https://www.realsimple.com/foods-healthier-than-you-thought-11688865?utm_source=chatgpt.com", "category": "Nutrition"},
    {"title": "Diet & Weight Loss", "type": "article", "content": "https://www.health.harvard.edu/topics/diet-and-weight-loss?utm_source=chatgpt.com", "category": "Nutrition"},
    {"title": "Intuitive Eating", "type": "article", "content": "https://en.wikipedia.org/wiki/Intuitive_eating?utm_source=chatgpt.com", "category": "Nutrition"},
    {"title": "Exercise for Heart Health", "type": "video", "content": "https://youtu.be/rtps8NCZTm8", "category": "Fitness"},
    {"title": "10 Best Diabetes Exercises to Lower Blood Sugar", "type": "video", "content": "https://www.youtube.com/watch?pp=ygUII3N1Z2Vya2k%3D&v=-uK8a80vyeI&utm_source=chatgpt.com", "category": "Fitness"},
    {"title": "20-Minute Full Body Strength Workout ", "type": "video", "content": "https://www.youtube.com/watch?v=Q2cMMnUuKYQ&utm_source=chatgpt.com", "category": "Fitness"},
     {"title": "Pregnancy Workout For Beginners", "type": "video", "content": "https://www.youtube.com/watch?v=quMHccQuH6A&utm_source=chatgpt.com", "category": "Fitness"},


    # {"title": "Diabetes Symptoms Infographic", "type": "image", "content": "", "category": "Diseases"}
]
# ✅ API Route to Fetch Health Resources (Use GET instead of POST)
@app.route('/api/health', methods=['GET'])  
def get_resources():
    response = jsonify(health_resources)
    response.headers.add("Access-Control-Allow-Origin", "*")  # ✅ Explicitly allow CORS
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5005)  # 🛠 Ensure it runs on the correct port

