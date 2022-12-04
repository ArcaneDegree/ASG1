var home_btn = document.getElementById("home_btn");

home_btn.addEventListener("click", OnHomeBtnClicked);

function OnHomeBtnClicked()
{
    window.location.href = "index.html";
}