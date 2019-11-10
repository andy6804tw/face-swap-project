import landmark as landmark
import videoLandmark as videoLandmark
import cv2

"""
mode 1: two image swap face
mode 2: face change on video
"""


mode="1"

if __name__ == '__main__':
    if mode=="1":
        result=landmark.getLandmark('')
        cv2.imshow('result',result)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
    else:
        videoLandmark.getVideoLandmark('')