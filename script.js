"use strict";
function xyz() {
    const workexperiance = document.getElementById(`experience`);
    const button = document.getElementById(`close`);
    if (workexperiance && button) {
        if (workexperiance.style.display === `none`) {
            workexperiance.style.display = `block`;
            button.innerHTML = `Close`;
        }
        else {
            workexperiance.style.display = `none`;
            button.innerHTML = `Open`;
        }
    }
    else {
        console.log("element with id `experiance` not found");
    }
}
