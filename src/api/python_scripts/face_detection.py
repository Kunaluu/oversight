import cv2
import os

frames_dir = './tmp'  # Match the directory used in Node.js serverless function

# Load the Haar Cascade classifier for frontal faces
cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(cascade_path)

# Function to detect faces in an image
def detect_faces(image_path):
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.imwrite(image_path, img)

# Process each frame in the frames directory
for filename in os.listdir(frames_dir):
    if filename.endswith('.png') or filename.endswith('.jpg'):
        frame_path = os.path.join(frames_dir, filename)
        detect_faces(frame_path)

print('Face detection completed for all frames.')