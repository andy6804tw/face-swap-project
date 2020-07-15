import imageSwap as imageSwap
import videoSwap as videoSwap
import matplotlib.pyplot as plt

"""
mode 1: two image swap face
mode 2: face change on video
"""


mode="2"

if __name__ == '__main__':
    if mode=="1":
        result=imageSwap.i2iSwap('')[:,:,::-1]
        plt.imshow(result)
        plt.show()
    else:
        result=videoSwap.i2vSwap('test1.jpg','test_video.mp4')
        print('response:',result)