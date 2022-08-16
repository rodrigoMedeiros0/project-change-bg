let button = document.getElementById("button");
let background_changed = false;

function background_change() {
    
    if (background_changed == false) {
        background_changed = true;
        document.body.style.background = "#000000";
        button.style.background = "#000000";
        button.style.color = "white";
    } else {
        document.body.style.background = "#9D69A3";
        background_changed = false;
        button.style.background = "#9D69A3";
        button.style.color = "white";
    }

}