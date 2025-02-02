from face_alignment import FaceAlignment,LandmarksType
import os 
from glob import glob
import matplotlib
# matplotlib.use('TkAgg')
matplotlib.use('agg')
import matplotlib.pyplot as plt
import cv2
import numpy as np
import PIL
import base64 
import time

# for display in jupyterhub
# from IPython import display
img_target_path='./static/test1.jpg'


fa = FaceAlignment(LandmarksType._2D, device='cpu')
def plot_landmarks(frame, landmarks):
    print('in plot')
#     dpi = config.FEATURES_DPI
    dpi=100
    fig = plt.figure(figsize=(frame.shape[1] / dpi, frame.shape[0] / dpi), dpi=dpi)
    ax = fig.add_subplot(111)
    ax.axis('off')
    plt.imshow(np.ones(frame.shape))
    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

    for i in range(len(landmarks)):
        # Head
        ax.plot(landmarks[i][0:17, 0], landmarks[i][0:17, 1], linestyle='-', color='green', lw=2)
        # Eyebrows
        ax.plot(landmarks[i][17:22, 0], landmarks[i][17:22, 1], linestyle='-', color='orange', lw=2)
        ax.plot(landmarks[i][22:27, 0], landmarks[i][22:27, 1], linestyle='-', color='orange', lw=2)
        # Nose
        ax.plot(landmarks[i][27:31, 0], landmarks[i][27:31, 1], linestyle='-', color='blue', lw=2)
        ax.plot(landmarks[i][31:36, 0], landmarks[i][31:36, 1], linestyle='-', color='blue', lw=2)
        # Eyes
        ax.plot(landmarks[i][36:42, 0], landmarks[i][36:42, 1], linestyle='-', color='red', lw=2)
        ax.plot(landmarks[i][42:48, 0], landmarks[i][42:48, 1], linestyle='-', color='red', lw=2)
        # Mouth
        ax.plot(landmarks[i][48:60, 0], landmarks[i][48:60, 1], linestyle='-', color='purple', lw=2)

    fig.canvas.draw()
    data = PIL.Image.frombuffer('RGB', fig.canvas.get_width_height(), fig.canvas.tostring_rgb(), 'raw', 'RGB', 0, 1)
    # plt.close()
    plt.close()
    # plt.show()
    # display.clear_output(wait=True)
    print('out plot')
    return data


def process_img_to_lm(input_img , fa):
    target_img_landmark = fa.get_landmarks(input_img)
    print(len(target_img_landmark),'face detect')
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
    # Read images
    if insertValues=='':
        target_img = cv2.imread(img_target_path)[:,:,::-1]
    else:
        target_img = base64_cv2(insertValues['image'])
    res = process_img_to_lm(target_img , fa)
    # plt.imshow(np.concatenate( (target_img,res) , axis=1) )
    # plt.imshow(res)
    # return cv2_base64(res)
    return res
