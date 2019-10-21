from flask import Blueprint, request,jsonify
from flask_uploads import UploadSet, IMAGES,patch_request_class, AllExcept


upload = Blueprint('upload',__name__)
upFile = UploadSet('upFile',extensions=AllExcept(()))

@upload.route('', methods=['GET','POST'])
def uploadFile():
  if request.method == 'POST' and 'file'  in request.files:
        filename = upFile.save(request.files['file'])
        file_url = upFile.url(filename)
        return 'don'
  else:
    return 'hi'
