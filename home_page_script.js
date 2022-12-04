/* Note: Local storage is being used so that data about the different types of food offered by the 
restaurant can be shared between pages and does not need to be initialized every time the page is 
reloaded, which might be inefficient and unnecessary. */
var food_list = JSON.parse(localStorage.getItem("food_list"));

var job_positions_list = JSON.parse(localStorage.getItem("job_positions_list"));

//document.getElementById("about_us_btn").addEventListener("click", on_about_us_btn_clicked, false);

document.getElementById("food_menu_btn").addEventListener("click", on_food_menu_btn_clicked, false);

document.getElementById("food_order_btn").addEventListener("click", on_food_order_btn_clicked, false);

document.getElementById("jobs_btn").addEventListener("click", on_jobs_btn_clicked, false);

InitFoodList();

InitJobPositionsList();

/*
function on_about_us_btn_clicked()
{
    window.location.href = "about_us.html";
}
*/

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

function JobPositionObj(chosen_job_pos_name, chosen_job_pos_img_link, chosen_job_pos_description, chosen_job_pos_requirements)
{
    this.job_pos_name = chosen_job_pos_name;

    this.job_pos_img_link = chosen_job_pos_img_link;

    this.job_pos_description = chosen_job_pos_description;

    this.job_pos_requirements = chosen_job_pos_requirements;
}

function InitFoodList()
{
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

function InitJobPositionsList()
{
    job_positions_list = [];

    job_positions_list.push(new JobPositionObj(
        "Service Crew",
        "Images/Service_Crew.jpg",
        "As a Service Crew employee, you will get to be part of a friendly and welcoming service crew, you will greet and serve customers in an efficient, warm and friendly manner, you will also have the opportunity to learn about customer service and food preparation. At the same time, you will also shoulder the responsibility of ensuring that the restaurant is clean and that the customers' needs are met as much as possible.",
        "We are looking for individuals who have a friendly and interesting personality, as well as a strong passion and high energy for ensuring customers are content. It is also highly preferable for these individuals to be willing to work shift hours, as well as on weekends and public holidays if needed."
    ));

    job_positions_list.push(new JobPositionObj(
        "Barista",
        "Images/Barista.jpg",
        "As a Barista, you will have the opportunity to learn more about latte art, as well as how to brew excellent coffee. You will also help in the preparation of snacks and pastries, and interact with customers in a composed and confident manner.",
        "We are looking for individuals who have a strong passion and high energy for ensuring customers are content, have an interesting and cheerful personality, will be able to greet and serve customers in an efficient, warm and friendly manner, and are willing to work shift hours, as well as on weekends and public holidays if needed."
    ));

    job_positions_list.push(new JobPositionObj(
        "Delivery Rider",
        "Images/Delivery_Driver.jpg",
        "As a Delivery Rider, you will be tasked with providing high quality delivery services to our customers, as well as to effectively cater to customers' needs. You will also be responsible for ensuring that food safety procedures are properly followed during the transfer and packing of food for delivery.",
        "We are looking for individuals who have a valid Class 2B license with a minimum of 2 years riding experience and a clean riding record, an interesting and fun personality, a strong passion and high energy for ensuring that customers are content, are able to greet and serve customers in an efficient, warm and friendly manner, and are willing to work shift hours, as well as on weekends and public holidays if needed."
    ));

    job_positions_list.push(new JobPositionObj(
        "Restaurant Management Trainee",
        "Images/Manager.webp",
        "As a Restaurant Management Trainee, you will have the opportunity to learn to master budgeting, cost-management, inventory planning. You will be responsible for the planning and coordination of sales building activites, supervising store operations, cash control and shift management. You will also get to manage a high-performance team and nurture their talents and drive marketing, recruitment and training campaigns.",
        "We are looking for individuals who have a Degree, Diploma, Higher Nitec or Nitec certification in any discipline, a strong passion and high energy for ensuring that customers are content, the motivation and resourcefulness to deliver results, good management skills with the ability to lead a team and motivate them, and the willingness to work shifts, as well as weekends and public holidays if needed (5-day work week)."
    ));

    localStorage.setItem("job_positions_list", JSON.stringify(job_positions_list));
}

