from flask import Blueprint, request,jsonify
from flask_uploads import UploadSet, IMAGES,patch_request_class, AllExcept


upload = Blueprint('upload',__name__)
upFile = UploadSet('upFile',extensions=AllExcept(()))

@upload.route('', methods=['GET','POST'])
def uploadFile():
  if request.method == 'POST' and 'file'  in request.files:
    request.files['file'].filename='srcVideo.'+request.files['file'].filename.split('.')[1]
    filename = upFile.save(request.files['file'])
    # file_url = upFile.url(filename)
    return 'don'
  elif request.method == 'POST' and 'fileImage'  in request.files:
    request.files['fileImage'].filename='srcImage.'+request.files['fileImage'].filename.split('.')[1]
    filename = upFile.save(request.files['fileImage'])
    # file_url = upFile.url(filename)
    return 'don'
  else:
    return 'hi'
