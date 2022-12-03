document.getElementById("about_us_btn").addEventListener("click", on_about_us_btn_clicked, false);

document.getElementById("food_menu_btn").addEventListener("click", on_food_menu_btn_clicked, false);

document.getElementById("food_order_btn").addEventListener("click", on_food_order_btn_clicked, false);

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

