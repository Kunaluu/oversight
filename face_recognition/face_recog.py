from flask import Flask
from flask_socketio import SocketIO, emit
import cv2
import base64
import os
from flask_cors import CORS

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins=["http://localhost:5173"])
CORS(app)

# Ensure the data directory exists
if not os.path.exists('data'):
    os.makedirs('data')

# Load Haar cascade for face detection
face_classifier = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

def face_cropped(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale(gray, 1.3, 5)
    if len(faces) == 0:
        return None
    for (x, y, w, h) in faces:
        cropped_face = img[y:y + h, x:x + w]
        return cropped_face
    return None

def generate_frames():
    cap = cv2.VideoCapture(0)
    img_id = 0
    id = 1

    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            cropped_face = face_cropped(frame)
            if cropped_face is not None:
                img_id += 1
                face = cv2.resize(cropped_face, (200, 200))
                face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
                file_name_path = f"data/user_kunal.{id}.{img_id}.jpg"
                cv2.imwrite(file_name_path, face)
                cv2.putText(face, str(img_id), (50, 50), cv2.FONT_HERSHEY_COMPLEX, 1, (0, 255, 0), 2)
                ret, buffer = cv2.imencode('.jpg', face)
                frame = buffer.tobytes()
                frame = base64.b64encode(frame).decode('utf-8')
                yield frame

                if img_id == 200:
                    break

    cap.release()

@socketio.on('request_frame')
def handle_request_frame():
    for frame in generate_frames():
        socketio.emit('new_frame', {'frame': frame})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)