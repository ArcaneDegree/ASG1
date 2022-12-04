var food_list = JSON.parse(localStorage.getItem("food_list"));

var current_shopping_cart = JSON.parse(localStorage.getItem("current_shopping_cart"));

var current_food_img = document.getElementById("current_food_img");

var dish_selection_dropdown = document.getElementById("dish_selection_dropdown");

var calculated_price_tag = document.getElementById("calculated_price_tag");

var quantity_input_box = document.getElementById("quantity_input_box");

var main_order_panel_div = document.getElementById("main_order_panel_div");

var pre_order_panel_div = document.getElementById("pre_order_panel_div");

var order_panel_div = document.getElementById("order_panel_div");

var view_order_panel_div = document.getElementById("view_order_panel_div");

var post_order_panel_div = document.getElementById("post_order_panel_div");

var start_order_btn = document.getElementById("start_order_btn");

var cancel_order_btn = document.getElementById("cancel_order_btn");

var view_order_details_btn = document.getElementById("view_order_details_btn");

var order_details_grid = document.getElementById("order_details_grid");

var add_to_order_btn = document.getElementById("add_to_order_btn");

var back_to_order_btn = document.getElementById("back_to_order_btn");

var purchase_btn = document.getElementById("purchase_btn");

var order_completion_status_popup = document.getElementById("order_completion_status_popup");

var complete_payment_btn = document.getElementById("complete_payment_btn");

dish_selection_dropdown.addEventListener("change", OnDishSelectionDropdownValueChanged);

dish_selection_dropdown.addEventListener("change", UpdateFoodPriceTag);

quantity_input_box.addEventListener("change", UpdateFoodPriceTag);

start_order_btn.addEventListener("click", OnStartOrderBtnClicked);

cancel_order_btn.addEventListener("click", OnCancelOrderBtnClicked);

view_order_details_btn.addEventListener("click", OnViewOrderDetailsBtnClicked);

add_to_order_btn.addEventListener("click", OnAddToOrderBtnClicked);

back_to_order_btn.addEventListener("click", OnBackToOrderBtnClicked);

purchase_btn.addEventListener("click", OnPurchaseBtnClicked);

complete_payment_btn.addEventListener("click", OnCompletePaymentBtnClicked);

// For testing purposes only.
// current_shopping_cart.food_obj_list.push(new FoodObject("Hamburger", 2));

InitDishSelectionDropdownOptions();

UpdateOrderScreen();

// Constructor for a function based object called ShoppingCart, represents the user's orders, 
// contains a boolean attribute which indicates if the user has started an order and contains an 
// array attribute which stores FoodObject instances representing the various orders for food that 
// the user has placed.
function ShoppingCart()
{
    this.is_order_started = false;

    this.food_obj_list = [];
}

function UpdateLocalStorageShoppingCart()
{
    localStorage.setItem("current_shopping_cart", JSON.stringify(current_shopping_cart));
}

/* Constructor for a function based object called FoodObject, which stores information about the 
name of the food ordered by the user, as well as the price for one unit of that particular type 
of food. */
function FoodObject(chosen_food_name, chosen_food_quantity)
{
    this.food_name = chosen_food_name;

    this.food_quantity = chosen_food_quantity;
}

function InitDishSelectionDropdownOptions()
{
    for (let current_index = 0; current_index < food_list.length; current_index++)
    {
        var new_food_option = document.createElement("option");

        new_food_option.innerHTML = food_list[current_index].food_name;

        new_food_option.style.fontFamily = 'Segoe UI';

        dish_selection_dropdown.appendChild(new_food_option);
    }

    OnDishSelectionDropdownValueChanged();

    UpdateFoodPriceTag();
}

/* This method retrieves a FoodElement object with the same name as the chosen food name and then 
returns the value of its food_img_link attribute. */
function GetFoodImgLinkByName(chosen_food_name)
{
    for (let current_index = 0; current_index < food_list.length; current_index++)
    {
        if (food_list[current_index].food_name == chosen_food_name)
        {
            return food_list[current_index].food_img_link;
        }
    }

    return "";
}

function GetFoodElementObjByName(chosen_food_name)
{
    for (let current_index = 0; current_index < food_list.length; current_index++)
    {
        if (food_list[current_index].food_name == chosen_food_name)
        {
            return food_list[current_index];
        }
    }

    return null;
}

function OnDishSelectionDropdownValueChanged()
{
    current_food_img.setAttribute("src", GetFoodImgLinkByName(dish_selection_dropdown.options[dish_selection_dropdown.selectedIndex].value));
}

function UpdateFoodPriceTag()
{
    // alert("Updating price. Current quantity is: " + quantity_input_box.value);

    calculated_price_tag.innerHTML = "Price: S$" + (quantity_input_box.value * GetFoodElementObjByName(dish_selection_dropdown.options[dish_selection_dropdown.selectedIndex].value).food_price).toFixed(2);
}

/* Changes the visibility of the selected div, if the div is not supposed to be visible, then 
the function will ensure that the div does not take up space on the page. The value of the display 
attribute of the div will be set to "flex" when its visibility is toggled back on unless another 
display mode is passed as a parameter into the function. */
function ToggleDivVisibility(chosen_div_element, is_visible, display_mode = "flex")
{
    if (is_visible == true)
    {
        chosen_div_element.style.visibility = "visible";

        chosen_div_element.style.display = display_mode;
    }
    else
    {
        chosen_div_element.style.visibility = "hidden";

        chosen_div_element.style.display = "none";
    }
}

function UpdateOrderScreen()
{
    let main_order_panel_div_children = main_order_panel_div.children;

    if (current_shopping_cart == null)
    {
        current_shopping_cart = new ShoppingCart();

        UpdateLocalStorageShoppingCart();
    }

    if (current_shopping_cart.is_order_started == false)
    {
        ToggleDivVisibility(pre_order_panel_div, true);

        ToggleDivVisibility(order_panel_div, false);

        ToggleDivVisibility(view_order_panel_div, false);

        ToggleDivVisibility(post_order_panel_div, false);
    }
    else
    {
        ToggleDivVisibility(pre_order_panel_div, false);

        ToggleDivVisibility(order_panel_div, true);

        ToggleDivVisibility(view_order_panel_div, false);

        ToggleDivVisibility(post_order_panel_div, false);
    }
}

function OnStartOrderBtnClicked()
{
    current_shopping_cart.is_order_started = true;

    UpdateLocalStorageShoppingCart();

    UpdateOrderScreen();
}

function OnCancelOrderBtnClicked()
{
    current_shopping_cart.is_order_started = false;

    current_shopping_cart.food_obj_list = [];

    UpdateLocalStorageShoppingCart();

    UpdateOrderScreen();
}

function GetTotalOrderPriceWithoutGST(chosen_shopping_cart)
{
    let total_price = 0.00;

    for (let current_index = 0; current_index < chosen_shopping_cart.food_obj_list.length; current_index++)
    {
        total_price += chosen_shopping_cart.food_obj_list[current_index].food_quantity * GetFoodElementObjByName(chosen_shopping_cart.food_obj_list[current_index].food_name).food_price;
    }

    return total_price;
}

function OnViewOrderDetailsBtnClicked()
{
    ToggleDivVisibility(pre_order_panel_div, false);

    ToggleDivVisibility(order_panel_div, false);

    ToggleDivVisibility(view_order_panel_div, true);

    ToggleDivVisibility(post_order_panel_div, false);

    InitOrderDetails();
}

function InitOrderDetails()
{
    // Removes all children from the order_details_grid HTML div element.
    order_details_grid.innerHTML = "";

    var name_header_tag = document.createElement("h3");

    var quantity_header_tag = document.createElement("h3");

    var price_header_tag = document.createElement("h3");

    name_header_tag.innerHTML = "Name";

    quantity_header_tag.innerHTML = "Quantity";

    price_header_tag.innerHTML = "Price";

    order_details_grid.appendChild(name_header_tag);

    order_details_grid.appendChild(quantity_header_tag);

    order_details_grid.appendChild(price_header_tag);

    for (let current_index = 0; current_index < current_shopping_cart.food_obj_list.length; current_index++)
    {
        var food_name_tag = document.createElement("h3");

        food_name_tag.innerHTML = current_shopping_cart.food_obj_list[current_index].food_name;

        var food_quantity_tag = document.createElement("h3");

        food_quantity_tag.innerHTML = current_shopping_cart.food_obj_list[current_index].food_quantity;

        var food_price_tag = document.createElement("h3");

        food_price_tag.innerHTML = "S$" + (GetFoodElementObjByName(current_shopping_cart.food_obj_list[current_index].food_name).food_price * current_shopping_cart.food_obj_list[current_index].food_quantity).toFixed(2);

        order_details_grid.appendChild(food_name_tag);

        order_details_grid.appendChild(food_quantity_tag);

        order_details_grid.appendChild(food_price_tag);
    }

    var total_price_label = document.createElement("h3");

    total_price_label.innerHTML = "Total Price:"

    var total_price_tag = document.createElement("h3");

    total_price_tag.innerHTML = "S$" + GetTotalOrderPriceWithoutGST(current_shopping_cart).toFixed(2);

    order_details_grid.appendChild(total_price_label);

    order_details_grid.appendChild(total_price_tag);

    let order_details_grid_children = order_details_grid.children;

    for (let current_index = 0; current_index < order_details_grid_children.length; current_index++)
    {
        order_details_grid_children[current_index].style.textAlign = "center";
    }
}

function OnAddToOrderBtnClicked()
{
    for (let current_index = 0; current_index < current_shopping_cart.food_obj_list.length; current_index++)
    {
        if (dish_selection_dropdown.options[dish_selection_dropdown.selectedIndex].value == current_shopping_cart.food_obj_list[current_index].food_name)
        {
            current_shopping_cart.food_obj_list[current_index].food_quantity += parseFloat(quantity_input_box.value);
            
            UpdateLocalStorageShoppingCart();

            return;
        }
    }

    current_shopping_cart.food_obj_list.push(new FoodObject(dish_selection_dropdown.options[dish_selection_dropdown.selectedIndex].value, parseFloat(quantity_input_box.value)));

    UpdateLocalStorageShoppingCart();
}

function OnBackToOrderBtnClicked()
{
    ToggleDivVisibility(pre_order_panel_div, false);

    ToggleDivVisibility(order_panel_div, true);

    ToggleDivVisibility(view_order_panel_div, false);

    ToggleDivVisibility(post_order_panel_div, false);
}

function OnPurchaseBtnClicked()
{
    ToggleDivVisibility(pre_order_panel_div, false);

    ToggleDivVisibility(order_panel_div, false);

    ToggleDivVisibility(view_order_panel_div, false);

    ToggleDivVisibility(post_order_panel_div, true);

    order_completion_status_popup.style.visibility = "hidden";
}

/* Basic input validation for payment details. Returns true if all payment details are true, returns 
false otherwise. */
function ValidatePaymentDetails()
{
    let card_number_input_box = document.getElementById("card_number_input_box");

    let card_mm_yy_input_box = document.getElementById("card_mm_yy_input_box");

    let card_csv_input_box = document.getElementById("card_csv_input_box");

    let street_address_input_box = document.getElementById("street_address_input_box");

    let unit_no_input_box = document.getElementById("unit_no_input_box");

    let postal_code_input_box = document.getElementById("postal_code_input_box");

    if (card_number_input_box.value == "" || card_mm_yy_input_box.value == "" || card_csv_input_box.value == "" || street_address_input_box.value == "" || unit_no_input_box.value == "" || postal_code_input_box.value == "")
    {
        return false;
    }
    
    return true;
}

function OnCompletePaymentBtnClicked()
{
    if (complete_payment_btn.innerHTML == "Return to Homepage")
    {
        window.location.href = "index.html";

        document.getElementById("payment_details_section_header").style.visibility = "hidden";

        ToggleDivVisibility(document.getElementById("payment_details_grid"), false, "grid");

        complete_payment_btn.innerHTML = "Make Payment";
    }
    else
    {
        if (ValidatePaymentDetails() == true)
        {
            order_completion_status_popup.style.backgroundColor = "#85e86f";

            order_completion_status_popup.innerHTML = "Transaction successful. Your order will be arriving shortly.";

            order_completion_status_popup.style.visibility = "visible";

            document.getElementById("payment_details_section_header").style.visibility = "hidden";

            ToggleDivVisibility(document.getElementById("payment_details_grid"), false, "grid");

            complete_payment_btn.innerHTML = "Return to Homepage";

            current_shopping_cart.is_order_started = false;

            current_shopping_cart.food_obj_list = [];

            UpdateLocalStorageShoppingCart();
        }
        else
        {
            order_completion_status_popup.style.backgroundColor = "#d6393e";

            order_completion_status_popup.innerHTML = "Transaction failed. Please ensure that the credentials that you have entered in are correct.";

            order_completion_status_popup.style.visibility = "visible";
        }
    }
}