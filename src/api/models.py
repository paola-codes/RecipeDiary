from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #Relationships
    recipe = db.relationship('Recipe', backref='user')

    def __repr__(self):
        return '<User %r>' % self.full_name

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "recipe": [recipe.serialize() for recipe in self.recipe]
            # do not serialize the password, its a security breach
        }

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    ingredients = db.Column(db.String(120), unique=False, nullable=True)
    instructions = db.Column(db.String(120), unique=False, nullable=True)
    ocassion = db.Column(db.String(120), unique=False, nullable=True)
    difficulty = db.Column(db.String(120), unique=False, nullable=True)
    comments = db.Column(db.String(120), unique=False, nullable=True)
    #Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)

    def __repr__(self):
        return '<Recipe %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "ocassion": self.ocassion,
            "difficulty": self.difficulty,
            "comments": self.comments,
            "user_id": self.user_id,
        }