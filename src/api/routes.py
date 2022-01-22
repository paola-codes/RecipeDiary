"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Recipe
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#First GET Method
@api.route('/user', methods=['GET'])
def get_users():

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))

    return jsonify(
        all_users
    ), 200

#User Methods--------------------------------------------------------------------

#Get Specific User
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Add New User
@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"]
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200

#User Login
@api.route('/login', methods=['POST'])
def user_login():

    body = request.get_json()

    user = User.query.filter_by(email = body["email"], password = body["password"]).first()

    if user == None:
        return "email or password is incorrect", 400
    return jsonify(
        user.serialize()
    ), 200

#Update User Profile
@api.route('/user/<id>', methods=['PUT'])
def update_user_profile(id):
    
    my_profile = User.query.get(id)

    body = request.get_json()

    my_profile.full_name = body["full_name"]
    my_profile.email = body["email"]

    db.session.commit()

    profile_query = User.query.get(id)

    if profile_query.full_name == body["full_name"]:
        return jsonify(profile_query.serialize()), 200
    raise APIException("Update Failed")

#Recipe Methods--------------------------------------------------------------------

#Get User Recipes
@api.route('/recipe/user/<user_id>', methods=['GET'])
def get_recipes(user_id):

    recipe_query = Recipe.query.filter_by(user_id=user_id)
    all_recipes = list(map(lambda x: x.serialize(), recipe_query))

    return jsonify(
        all_recipes
    ), 200

#Add New Recipe
@api.route('/recipe', methods=['POST'])
def add_recipe():

    body = request.get_json()

    new_recipe = Recipe(
        title = body["title"],
        ingredients = body["ingredients"],
        instructions = body["instructions"],
        ocassion = body["ocassion"],
        difficulty = body["difficulty"],
        comments = body["comments"],
        user_id = body["user_id"]
    )

    db.session.add(new_recipe)
    db.session.commit()

    recipe_query = Recipe.query.all()
    all_recipes = list(map(lambda x: x.serialize(), recipe_query))
    return jsonify(all_recipes), 200

#Update Recipe
@api.route('/recipe/<id>', methods=['PUT'])
def update_recipe(id):
    
    recipe = Recipe.query.get(id)

    body = request.get_json()

    recipe.title = body["title"]
    recipe.ingredients = body["ingredients"]
    recipe.instructions = body["instructions"]
    recipe.ocassion = body["ocassion"]
    recipe.difficulty = body["difficulty"]
    recipe.comments = body["comments"]

    db.session.commit()

    recipe_query = Recipe.query.get(id)

    if recipe_query.title == body["title"]:
        return jsonify(recipe_query.serialize()), 200
    return "Update Failed"

#Get Specific Recipe
@api.route('/recipe/<id>', methods=['GET'])
def get_specific_recipe(id):

    recipe_query = Recipe.query.get(id)

    return jsonify(
        recipe_query.serialize()
    ), 200

#Delete Recipe
@api.route('/recipe/<id>', methods=['DELETE'])
def delete_recipe(id):

    body = request.get_json()
    
    recipe =  Recipe.query.get(id)

    db.session.delete(recipe)
    db.session.commit()

    recipe_query = Recipe.query.all()
    all_recipes = list(map(lambda x: x.serialize(), recipe_query))
    return jsonify(all_recipes), 200

