import os, shutil
from flask import Blueprint, request,jsonify
from flask_uploads import UploadSet, IMAGES,patch_request_class, AllExcept


upload = Blueprint('upload',__name__)
upFile = UploadSet('upFile',extensions=AllExcept(()))

@upload.route('', methods=['GET','POST'])
def uploadFile():
  if request.method == 'POST' and 'videoFile'  in request.files:
    emptyFolder()
    splitName=request.files['videoFile'].filename.split('.')
    request.files['videoFile'].filename='srcVideo.'+splitName[len(splitName)-1]
    filename = upFile.save(request.files['videoFile'])
    # file_url = upFile.url(filename)
    return 'don'
  elif request.method == 'POST' and 'imageFile'  in request.files:
    emptyFolder()
    splitName=request.files['imageFile'].filename.split('.')
    request.files['imageFile'].filename='srcImage.'+splitName[len(splitName)-1]
    filename = upFile.save(request.files['imageFile'])
    # file_url = upFile.url(filename)
    return 'don'
  else:
    return 'hi'


# clear all file in folder
def emptyFolder():
  folder = 'app/static'
  for the_file in os.listdir(folder):
      file_path = os.path.join(folder, the_file)
      try:
          if os.path.isfile(file_path):
              os.unlink(file_path)
      except Exception as e:
          print(e)
