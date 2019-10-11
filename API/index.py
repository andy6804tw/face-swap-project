
from flask import Flask,jsonify,request
from flask_cors import CORS
import model

app = Flask(__name__)
CORS(app)

stores = [{
    'name': 'Elton',
    'items': [{'name':'my item 1', 'price': 30 }],
    },
    {
    'name': 'Elton',
    'items': [{'name':'my item 2', 'price': 15 }],
    },
]
#get /store
@app.route('/store')
def get_stores():
    return jsonify(stores)

#post /store/<name> data: {name :}
@app.route('/store' , methods=['POST'])
def create_item_in_store():
    request_data = request.get_json()
    return jsonify({'result':model.imagePost(request_data)})


app.run(debug=True,port=5000)
