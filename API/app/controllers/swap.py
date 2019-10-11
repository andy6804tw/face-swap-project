#coding:utf-8
#swap
from flask import Blueprint, request,jsonify
import model


import FaceSwap.swapModel

swap = Blueprint('swap',__name__)
  

@swap.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return 'user_add'
  else:
    insertValues = request.get_json()
    return jsonify({'result':str(FaceSwap.swapModel.ooxx(insertValues))})

@swap.route('/show')
def show():
  return 'user_show'

@swap.route('/test')
def ox():
  return FaceSwap.swapModel.ooxx('')
