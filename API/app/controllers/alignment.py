from flask import Blueprint, request,jsonify,redirect
import FaceAlignment.landmark as landmark
import FaceAlignment.videoLandmark as videoLandmark



alignment = Blueprint('alignment',__name__)
  

@alignment.route('/landmark', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return jsonify({'result':str(landmark.getLandmark(''))})
  else:
    insertValues = request.get_json()
    image=insertValues['image']
    return jsonify({'result':str(landmark.getLandmark(insertValues)),'image':image})


@alignment.route('/landmark/video', methods=['GET','POST'])
def video():
  if request.method == 'GET':
    return videoLandmark.getVideoLandmark()
  else:
    videoName=request.get_json()['videoName']
    return videoLandmark.getVideoLandmark(videoName)
