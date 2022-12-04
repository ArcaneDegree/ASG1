/* Note: Local storage is being used so that data about the different types of food offered by the 
restaurant can be shared between pages and does not need to be initialized every time the page is 
reloaded, which might be inefficient and unnecessary. */
var food_list = JSON.parse(localStorage.getItem("food_list"));

document.getElementById("about_us_btn").addEventListener("click", on_about_us_btn_clicked, false);

document.getElementById("food_menu_btn").addEventListener("click", on_food_menu_btn_clicked, false);

document.getElementById("food_order_btn").addEventListener("click", on_food_order_btn_clicked, false);

document.getElementById("jobs_btn").addEventListener("click", on_jobs_btn_clicked, false);

InitFoodList();

function on_about_us_btn_clicked()
{
    window.location.href = "about_us.html";
}

function on_food_menu_btn_clicked()
{
    window.location.href = "food_menu.html";
}

function on_food_order_btn_clicked()
{
    window.location.href = "food_order.html";
}

function on_jobs_btn_clicked()
{
    window.location.href = "our_jobs.html";
}

function FoodElement(chosen_food_name, chosen_food_img_link, chosen_food_price, chosen_food_type)
{
    this.food_name = chosen_food_name;

    this.food_img_link = chosen_food_img_link;

    this.food_price = chosen_food_price;

    this.food_type = chosen_food_type;
}

function InitFoodList()
{
    if (food_list == null)
    {
        alert("Food list is null");

        food_list = [];

        // Adding main dishes to the food list.
        food_list.push(new FoodElement("Chicken Burger", "Images/Chicken_Burger.jpg", 7.80, "Main Dish"));

        food_list.push(new FoodElement("Cheese Burger", "Images/Cheese_Burger.jpg", 6.50, "Main Dish"));

        food_list.push(new FoodElement("Fish Burger", "Images/Fish_Burger.webp", 6.80, "Main Dish"));

        food_list.push(new FoodElement("Double Cheese Burger", "Images/Double_Cheese_Burger.webp", 7.00, "Main Dish"));

        food_list.push(new FoodElement("Hamburger", "Images/Hamburger.webp", 6.00, "Main Dish"));

        food_list.push(new FoodElement("Spicy Chicken Burger", "Images/Spicy_Chicken_Burger.jpg", 8.00, "Main Dish"));

        // Adding sides to the food list.
        food_list.push(new FoodElement("French Fries", "Images/French_Fries.jpg", 2.00, "Side"));

        food_list.push(new FoodElement("Coleslaw", "Images/Coleslaw.webp", 2.40, "Side"));

        food_list.push(new FoodElement("Nacho Cheese Fries", "Images/Nacho_Cheese_Fries.jpg", 2.50, "Side"));

        food_list.push(new FoodElement("Chicken Drumstick", "Images/Chicken_Drumstick.jpg", 2.40, "Side"));

        food_list.push(new FoodElement("Vanilla Ice Cream", "Images/Vanilla_Ice_Cream.webp", 2.30, "Side"));

        food_list.push(new FoodElement("Chocolate Ice Cream", "Images/Chocolate_Ice_Cream.jpg", 2.40, "Side"));

        food_list.push(new FoodElement("Strawberry Ice Cream", "Images/Strawberry_Ice_Cream.jpg", 2.30, "Side"));

        food_list.push(new FoodElement("Pineapple Tart", "Images/Pineapple_Tart.jpg", 2.10, "Side"));

        food_list.push(new FoodElement("Cinammon Roll", "Images/Cinammon_Roll.jpg", 2.80, "Side"));

        food_list.push(new FoodElement("Chicken Nuggets", "Images/Chicken_Nuggets.jpg", 2.30, "Side"));

        // Adding beverages to the food list.
        food_list.push(new FoodElement("Milo", "Images/Milo.webp", 3.10, "Beverage"));

        food_list.push(new FoodElement("Ice Lemon Tea", "Images/Ice_Lemon_Tea.jpg", 3.20, "Beverage"));

        food_list.push(new FoodElement("Coffee", "Images/Coffee.webp", 3.50, "Beverage"));

        food_list.push(new FoodElement("Cappucinno", "Images/Cappucinno.jpg", 3.60, "Beverage"));

        food_list.push(new FoodElement("Hot Chocolate", "Images/Hot_Chocolate.webp", 3.60, "Beverage"));

        food_list.push(new FoodElement("Bottled Water", "Images/Bottled_Water.jpg", 2.50, "Beverage"));

        food_list.push(new FoodElement("Tea", "Images/Tea.jpg", 3.30, "Beverage"));

        food_list.push(new FoodElement("Sprite", "Images/Sprite.jpg", 3.40, "Beverage"));

        food_list.push(new FoodElement("Coca-Cola", "Images/Coca_Cola.jpg", 3.40, "Beverage"));

        food_list.push(new FoodElement("Coca-Cola Zero Sugar", "Images/Coca_Cola_Zero_Sugar.jpg", 3.50, "Beverage"));

        food_list.push(new FoodElement("Orange Juice", "Images/Orange_Juice.jpg", 3.10, "Beverage"));

        food_list.push(new FoodElement("Green Tea", "Images/Green_Tea.jpg", 3.30, "Beverage"));

        localStorage.setItem("food_list", JSON.stringify(food_list));
    }
}

