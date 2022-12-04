var food_list = JSON.parse(localStorage.getItem("food_list"));

var current_shopping_cart = [];



function FoodObject(chosen_food_name, chosen_food_price)
{
    this.food_name = chosen_food_name;

    this.food_price = chosen_food_price;
}