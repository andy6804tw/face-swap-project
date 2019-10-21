#coding:utf-8
#swap
from flask import Blueprint, request,jsonify


import FaceSwap.swapModel

swap = Blueprint('swap',__name__)
  

@swap.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return 'Swap Route'
  else:
    insertValues = request.get_json()
    image1=insertValues['image1']
    image2=insertValues['image2']
    return jsonify({'result':str(FaceSwap.swapModel.ooxx(insertValues)),'image1':image1,'image2':image2})

@swap.route('/show')
def show():
  return 'user_show'

@swap.route('/test')
def ox():
  return FaceSwap.swapModel.ooxx('')
