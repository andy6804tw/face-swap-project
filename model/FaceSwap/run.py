import imageSwap as imageSwap
import matplotlib.pyplot as plt

mode="1"

if mode=="1":
    plt.imshow(imageSwap.i2iSwap('')[:,:,::-1])
    plt.show()