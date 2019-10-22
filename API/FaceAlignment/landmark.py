from face_alignment import FaceAlignment,LandmarksType
import os 
from glob import glob
import cv2
import numpy as np
import matplotlib.pyplot as plt
import base64
import PIL


img_target_path = './test9.jpg'
fa = FaceAlignment(LandmarksType._2D, device='cpu')

# 將圖片轉成landmark
def plot_landmarks(frame, landmarks):
#     dpi = config.FEATURES_DPI
    dpi=100
    fig = plt.figure(figsize=(frame.shape[1] / dpi, frame.shape[0] / dpi), dpi=dpi)
    ax = fig.add_subplot(111)
    ax.axis('off')
    plt.imshow(np.ones(frame.shape))
    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

    # Head
    ax.plot(landmarks[0:17, 0], landmarks[0:17, 1], linestyle='-', color='green', lw=2)
    # Eyebrows
    ax.plot(landmarks[17:22, 0], landmarks[17:22, 1], linestyle='-', color='orange', lw=2)
    ax.plot(landmarks[22:27, 0], landmarks[22:27, 1], linestyle='-', color='orange', lw=2)
    # Nose
    ax.plot(landmarks[27:31, 0], landmarks[27:31, 1], linestyle='-', color='blue', lw=2)
    ax.plot(landmarks[31:36, 0], landmarks[31:36, 1], linestyle='-', color='blue', lw=2)
    # Eyes
    ax.plot(landmarks[36:42, 0], landmarks[36:42, 1], linestyle='-', color='red', lw=2)
    ax.plot(landmarks[42:48, 0], landmarks[42:48, 1], linestyle='-', color='red', lw=2)
    # Mouth
    ax.plot(landmarks[48:60, 0], landmarks[48:60, 1], linestyle='-', color='purple', lw=2)

    fig.canvas.draw()
    data = PIL.Image.frombuffer('RGB', fig.canvas.get_width_height(), fig.canvas.tostring_rgb(), 'raw', 'RGB', 0, 1)
    plt.close(fig)
    # plt.show()
#     display.clear_output(wait=True)
    return data
    return 'data'

def process_img_to_lm(input_img , fa):
    target_img_landmark = fa.get_landmarks(input_img)[0]
    target_img_lm = plot_landmarks(input_img,target_img_landmark)
    target_img_lm = np.array(target_img_lm)
    return target_img_lm

# cv2 to base64
def cv2_base64(image):
    base64_str = cv2.imencode('.jpg',image)[1].tostring()
    base64_str = base64.b64encode(base64_str)
    return base64_str

# base64 to cv2
def base64_cv2(base64_str):
    imgString = base64.b64decode(base64_str)
    nparr = np.fromstring(imgString,np.uint8)  
    image = cv2.imdecode(nparr,cv2.IMREAD_COLOR)
    return image

def getLandmark(insertValues):
  target_img = base64_cv2(insertValues['image'])
  res = process_img_to_lm(target_img , fa)
  return cv2_base64(res)
