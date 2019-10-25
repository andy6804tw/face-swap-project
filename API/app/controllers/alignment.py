from flask import Blueprint, request,jsonify,redirect
import FaceAlignment.landmark as landmark



alignment = Blueprint('alignment',__name__)
  

@alignment.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return jsonify({'result':str(landmark.getLandmark(''))})
  else:
    insertValues = request.get_json()
    image=insertValues['image']
    return jsonify({'result':str(landmark.getLandmark(insertValues)),'image':image})
