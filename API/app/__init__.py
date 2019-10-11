# coding:utf-8
from flask import Flask,request,render_template
from app.controllers.swap import swap
app=Flask(__name__)
app.register_blueprint(swap, url_prefix='/swap')




