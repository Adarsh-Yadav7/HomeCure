import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv(r"C:\Users\vishw\Downloads\obesity_data.csv")

# Encode categorical variables
label_enc_gender = LabelEncoder()
df["Gender"] = label_enc_gender.fit_transform(df["Gender"])  # Male=1, Female=0

label_enc_obesity = LabelEncoder()
df["ObesityCategory"] = label_enc_obesity.fit_transform(df["ObesityCategory"])  # Encode target

# Define features and target
X = df.drop(columns=["ObesityCategory"])  # Features
y = df["ObesityCategory"]  # Target

# Split dataset into training (80%) and testing (20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest Classifier
rf_model = RandomForestClassifier(n_estimators=200, max_depth=10, random_state=42)
rf_model.fit(X_train, y_train)

# Predictions
y_train_pred = rf_model.predict(X_train)
y_test_pred = rf_model.predict(X_test)

# Calculate accuracies
train_accuracy = accuracy_score(y_train, y_train_pred)
test_accuracy = accuracy_score(y_test, y_test_pred)

print(f"Training Accuracy: {train_accuracy * 100:.2f}%")
print(f"Testing Accuracy: {test_accuracy * 100:.2f}%")

# Save the trained model
joblib.dump(rf_model, "obesity_prediction_model.pkl")
joblib.dump(label_enc_gender, "gender_encoder.pkl")
joblib.dump(label_enc_obesity, "obesity_encoder.pkl")

print("Model and encoders saved successfully!")