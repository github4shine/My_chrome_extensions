from flask import Flask
from flask.json import jsonify
from uuid import uuid4
from flask_cors import CORS

app= Flask(__name__)
CORS(app)

@app.route('/info', methods=['GET'])
def info():
    response = "{'test':123, 'name':'test'}"
    return response,200

if __name__=='__main__':
    app.run(host='0.0.0.0',port = 5000)