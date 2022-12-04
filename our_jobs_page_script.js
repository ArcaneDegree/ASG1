var job_positions_list = JSON.parse(localStorage.getItem("job_positions_list"));

var home_btn = document.getElementById("home_btn");

home_btn.addEventListener("click", OnHomeBtnClicked);

InitJobPositionDivs();

function InitJobPositionDivs()
{
    for (let current_index = 0; current_index < job_positions_list.length; current_index++)
    {
        var new_job_position_div = document.createElement("div");

        new_job_position_div.className = "job_position_div_class";

        var new_job_position_details_div = document.createElement("div");

        new_job_position_details_div.className = "job_position_details_div_class";

        var new_job_position_img = document.createElement("img");

        new_job_position_img.setAttribute("src", job_positions_list[current_index].job_pos_img_link);

        new_job_position_img.className = "job_position_img_class";

        var new_job_position_name_tag = document.createElement("h3");

        new_job_position_name_tag.innerHTML = job_positions_list[current_index].job_pos_name;

        var new_job_position_description_tag = document.createElement("p");

        new_job_position_description_tag.innerHTML = "Job Description: " + job_positions_list[current_index].job_pos_description;

        var new_job_position_requirements_tag = document.createElement("p");

        new_job_position_requirements_tag.innerHTML = "Job Requirements: " + job_positions_list[current_index].job_pos_requirements;
    
        new_job_position_details_div.appendChild(new_job_position_name_tag);

        new_job_position_details_div.appendChild(new_job_position_description_tag);

        new_job_position_details_div.appendChild(new_job_position_requirements_tag);

        new_job_position_div.appendChild(new_job_position_img);

        new_job_position_div.appendChild(new_job_position_details_div);

        document.body.appendChild(new_job_position_div);
    }
}

function OnHomeBtnClicked()
{
    window.location.href = "index.html";
}