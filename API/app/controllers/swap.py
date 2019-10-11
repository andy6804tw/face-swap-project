#coding:utf-8
#swap
from flask import Blueprint, request,jsonify
import model

swap = Blueprint('swap',__name__)
  

@swap.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    return 'user_add'
  else:
    insertValues = request.get_json()
    return jsonify({'result':model.imagePost(insertValues)})

@swap.route('/show')
def show():
  return 'user_show'
