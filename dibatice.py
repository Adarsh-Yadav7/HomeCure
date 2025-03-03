

import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier

# Sample dataset
data = {
    'Age': [45, 32, 50, 28, 60, 22, 35, 40, 55, 29, 48, 33, 52, 26, 38, 42, 57, 31, 47, 24],
    'Height': [167, 160, 175, 155, 180, 170, 162, 168, 175, 158, 172, 165, 178, 160, 170, 166, 180, 159, 173, 156],
    'Weight': [78, 65, 90, 60, 85, 70, 68, 72, 80, 62, 78, 70, 88, 58, 75, 76, 92, 64, 79, 59],
    'Exercise Level': ['Medium', 'High', 'Low', 'Medium', 'Low', 'High', 'Medium', 'Low', 'Medium', 'High', 'Low', 'Medium', 'Low', 'High', 'Medium', 'Low', 'Low', 'High', 'Medium', 'High'],
    'Family History': ['Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No'],
    'Diet Type': ['Unhealthy', 'Healthy', 'Unhealthy', 'Healthy', 'Unhealthy', 'Healthy', 'Healthy', 'Unhealthy', 'Healthy', 'Healthy', 'Unhealthy', 'Healthy', 'Unhealthy', 'Healthy', 'Healthy', 'Unhealthy', 'Unhealthy', 'Healthy', 'Healthy', 'Healthy'],
    'Thirst': ['Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No'],
    'Frequent Urination': ['Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No'],
    'Diabetes': [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
}

# Create DataFrame
df = pd.DataFrame(data)

# Separate features and target
X = df.drop('Diabetes', axis=1)
y = df['Diabetes']

# Preprocessing
numerical_features = ['Age', 'Height', 'Weight']
categorical_features = ['Exercise Level', 'Family History', 'Diet Type', 'Thirst', 'Frequent Urination']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numerical_features),
    ('cat', OneHotEncoder(), categorical_features)
])

# Create pipeline
model = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(random_state=42, n_estimators=100))
])

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model.fit(X_train, y_train)

print("Test Accuracy :", model.score(X_test,y_test)*100)
print("Train Accuracy:", model.score(X_train,y_train)*100)

# Save the model
joblib.dump(model, 'model.pkl')
print("Model trained and saved as 'model.pkl'.")


