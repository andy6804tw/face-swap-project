from flask import Blueprint, request,jsonify
from flask_uploads import UploadSet, IMAGES,\
patch_request_class, AllExcept


upload = Blueprint('upload',__name__)

photos = UploadSet('photos',extensions=AllExcept(()))
# configure_uploads(upload, photos)

@upload.route('', methods=['GET','POST'])
def uploadImage():
  if request.method == 'POST' and 'photo' in request.files:
        filename = photos.save(request.files['photo'])
        file_url = photos.url(filename)
        return 'don'
  else:
    return 'hi'
