import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression

# Generate synthetic dataset (500 samples)
np.random.seed(42)  # For reproducibility
n_samples = 500

data = {
    'Age': np.random.randint(18, 80, n_samples),
    'Height': np.random.randint(150, 190, n_samples),
    'Weight': np.random.randint(50, 120, n_samples),
    'Exercise Level': np.random.choice(['Low', 'Medium', 'High'], n_samples),
    'Family History': np.random.choice(['Yes', 'No'], n_samples),
    'Diet Type': np.random.choice(['Healthy', 'Unhealthy'], n_samples),
    'Thirst': np.random.choice(['Yes', 'No'], n_samples),
    'Frequent Urination': np.random.choice(['Yes', 'No'], n_samples),
}

# Create a diabetes label based on some conditions
data['Diabetes'] = (
    (np.array(data['Age']) > 50) |
    (np.array(data['Weight']) > 90) |
    ((np.array(data['Diet Type']) == 'Unhealthy') & (np.array(data['Family History']) == 'Yes'))
).astype(int)

# Convert to DataFrame
df = pd.DataFrame(data)

# Separate features and target
X = df.drop(columns=['Diabetes'])
y = df['Diabetes']

# Define categorical and numerical features
categorical_features = ['Exercise Level', 'Family History', 'Diet Type', 'Thirst', 'Frequent Urination']
numerical_features = ['Age', 'Height', 'Weight']

# Preprocessing: One-Hot Encoding for categorical, Scaling for numerical
preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numerical_features),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
])

# Create a pipeline with Logistic Regression
model = Pipeline([
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(max_iter=500))
])

# Split data into train-test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Evaluate the model
print("Test Accuracy :", model.score(X_test, y_test) * 100)
print("Train Accuracy:", model.score(X_train, y_train) * 100)

# Save the trained model
joblib.dump(model, "diabetes_model.pkl")
print("Model saved as 'diabetes_model.pkl'.")

