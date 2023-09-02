from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:2212@localhost/hello'
db = SQLAlchemy(app)

class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    rollNumber = db.Column(db.String(255))
    score = db.Column(db.Integer)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_student_score', methods=['POST'])
def get_student_score():
    name = request.form['name']
    roll_number = request.form['roll_number']
    student = Student.query.filter_by(name=name, rollNumber=roll_number).first()
    if student:
        status = "Passed" if student.score >= 33 else "Failed"
        return jsonify({
            'name': student.name,
            'rollNumber': student.rollNumber,
            'score': student.score,
            'status': status
        })
    else:
        return jsonify({'error': 'Student not found'})
    
@app.route('/insert')
def insert():
    return render_template('insert.html')


# Flask route to handle form submission
@app.route('/submit', methods=['POST'])
def submit():
    try:
        name = request.form['name']
        roll_number = request.form['roll-number']  # Use 'roll-number' to match the form field name
        score = request.form['score']
        

        # Create a new student record and add it to the database
        student = Student(name=name, rollNumber=roll_number, score=score)
        db.session.add(student)
        db.session.commit()

        return jsonify({'message': 'Data stored successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/show')
def show_table():
    # Fetch all records from the 'students' table
    students = Student.query.all()
    return render_template('show.html', students=students)

if __name__ == '__main__':
    app.run(debug=True)


