var main_dishes_list_div = document.getElementById("main_dishes_list_div");

var sides_list_div = document.getElementById("sides_list_div");

var beverages_list_div = document.getElementById("beverages_list_div");

var food_list = JSON.parse(localStorage.getItem("food_list"));

InitFoodDivs();

function FoodElement(chosen_food_name, chosen_food_img_link, chosen_food_price, chosen_food_type)
{
    this.food_name = chosen_food_name;

    this.food_img_link = chosen_food_img_link;

    this.food_price = chosen_food_price;

    this.food_type = chosen_food_type;
}

function InitFoodDivs()
{
    for (let current_index = 0; current_index < food_list.length; current_index++)
    {
        var food_element_div = document.createElement("div");

        var food_element_name_header = document.createElement("h3");

        var food_element_img = document.createElement("img");

        var food_element_price_para = document.createElement("p");

        food_element_div.className = "food_element_div";

        food_element_name_header.className = "food_element_name_header";

        food_element_img.className = "food_element_img";

        food_element_price_para.className = "food_element_price_para";

        food_element_name_header.innerHTML = food_list[current_index].food_name;

        food_element_img.setAttribute("src", food_list[current_index].food_img_link);

        food_element_price_para.innerHTML = "Price: S$" + food_list[current_index].food_price;

        food_element_div.appendChild(food_element_name_header);

        food_element_div.appendChild(food_element_img);

        food_element_div.appendChild(food_element_price_para);

        if (food_list[current_index].food_type == "Main Dish")
        {
            main_dishes_list_div.appendChild(food_element_div);
        }
        else if (food_list[current_index].food_type == "Side")
        {
            sides_list_div.appendChild(food_element_div);
        }
        else if (food_list[current_index].food_type == "Beverage")
        {
            beverages_list_div.appendChild(food_element_div);
        }
        else
        {
            console.log("Error occurred while initializing food element div: Unrecognized food type.");
        }
    }
}