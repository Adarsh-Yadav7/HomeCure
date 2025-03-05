
import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score

# Load dataset
df = pd.read_csv(r"C:\Users\vishw\Downloads\baby_gender_data.csv")

# Encode categorical variables
label_encoders = {}
for col in ["Cravings", "Morning_Sickness", "Mood_Swings", "Gender"]:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

# Splitting features and target
X = df.drop(columns=["Gender"])  # Features
y = df["Gender"]  # Target

# Standardizing numerical features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


# Splitting dataset into train and test
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Model Selection
rf_model = RandomForestClassifier(n_estimators=300, max_depth=15, random_state=42)
xgb_model = XGBClassifier(n_estimators=300, learning_rate=0.03, max_depth=10, random_state=42)

# Train and evaluate models
models = {"Random Forest": rf_model, "XGBoost": xgb_model}
best_model = None
best_accuracy = 0

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"{name} Accuracy: {acc:.4f}")

    if acc > best_accuracy:
        best_accuracy = acc
        best_model = model

# Save the best model, encoders, and scaler
joblib.dump(best_model, "baby_gender_model.pkl")
joblib.dump(label_encoders, "baby_gender_label_encoders.pkl")
joblib.dump(scaler, "baby_gender_scaler.pkl")

print(f"Best Model: {best_model.__class__.__name__} with Accuracy: {best_accuracy:.4f}")
