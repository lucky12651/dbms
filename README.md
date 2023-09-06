Certainly! Here's a README file for your Flask application:

```markdown
# Flask Student Management App

This is a simple Flask web application for managing student records. It allows you to insert student data, retrieve student scores, and view all student records.

## Prerequisites

Before running the application, make sure you have the following installed:

- Python (3.6 or higher)
- Flask
- Flask-SQLAlchemy
- MySQL Server (with a 'hello' database)

You can install Flask and Flask-SQLAlchemy using pip:

```bash
pip install Flask Flask-SQLAlchemy
```

## Setup

1. Clone this repository to your local machine.

2. Set up your MySQL database. Create a database named 'hello' and make sure you have a 'root' user with the password '2212'. You can modify the database configuration in `app.config['SQLALCHEMY_DATABASE_URI']` if needed.

3. Run the following command to create the 'students' table in the database:

```bash
python
from app import db
db.create_all()
exit()
```

## Usage

1. Start the Flask application by running the following command:

```bash
python app.py
```

2. Access the application in your web browser at `http://localhost:5000`.

3. Use the following endpoints:

   - `/insert`: Add new student records.
   - `/get_student_score`: Retrieve a student's score by providing their name and roll number.
   - `/show`: View all student records.

## Contributing

Feel free to contribute to this project by creating pull requests or reporting issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Make sure to adjust the content and formatting as needed for your specific project.