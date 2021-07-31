#importar libreria
from flask import Flask
#aplicacion
app = Flask(__name__)
#ruta
@app.route('/')
def index():
    return "Hola Mundo desde Flask - Python"

app.run()
