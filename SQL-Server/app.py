from flask import Flask, render_template
import pypyodbc as odbc
db_connect = odbc.connect('driver={SQL Server Native Client 11.0};'
                            'server=LENOVO\SQLEXPRESS;'
                            'database=MyProject;'
                            'trusted_connection=yes;')
app = Flask(__name__)

@app.route('/hello')
def hello_world():
    return 'Hello World'

@app.route('/plc_pv')
def plc_pv():
    conn = db_connect.cursor()
    conn.execute("SELECT * FROM LG1_1")

    for row in conn:
        print(row)

    return 'selected data'

@app.route('/showdata')
def showdata():
    conn = db_connect.cursor()
    query = conn.execute("SELECT * FROM LG1_1")

    rows = query.fetchall()

    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
