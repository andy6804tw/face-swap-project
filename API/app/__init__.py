# coding:utf-8
from flask import Flask,request,render_template
from flask_cors import CORS
from app.controllers.swap import swap
app=Flask(__name__)
CORS(app)

app.register_blueprint(swap, url_prefix='/swap')




