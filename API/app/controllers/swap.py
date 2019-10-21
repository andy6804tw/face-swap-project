#coding:utf-8
#swap
from flask import Blueprint, request,jsonify


import FaceSwap.imageSwap as imageSwap

swap = Blueprint('swap',__name__)
  

@swap.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return jsonify({'result': str(imageSwap.i2iSwap(''))})
  else:
    insertValues = request.get_json()
    image1=insertValues['image1']
    image2=insertValues['image2']
    return jsonify({'result':str(imageSwap.i2iSwap(insertValues)),'image1':image1,'image2':image2})

@swap.route('/show')
def show():
  return 'user_show'
  
