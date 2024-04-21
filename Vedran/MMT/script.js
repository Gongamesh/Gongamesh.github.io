var toggle = false;

function enlargeImage() {
    var imageElement = document.getElementById("image");
    
    if (!toggle) {
        imageElement.style.width = "600px";
        imageElement.style.height = "600px";
        toggle = true;
    } else {
        imageElement.style.width = "200px";
        imageElement.style.height = "200px";
        toggle = false;
    }
}


function enlargeSchoolImage() {
    var imageElement = document.getElementById("image1");
    
    if (!toggle) {
        imageElement.style.width = "1200px";
        imageElement.style.height = "800px";
        toggle = true;
    } else {
        imageElement.style.width = "200px";
        imageElement.style.height = "150px";
        toggle = false;
    }
}
function enlargeHighSchoolImage() {
    var imageElement = document.getElementById("image2");
    
    if (!toggle) {
        imageElement.style.width = "1200px";
        imageElement.style.height = "800px";
        toggle = true;
    } else {
        imageElement.style.width = "200px";
        imageElement.style.height = "150px";
        toggle = false;
    }
}

function enlargeFeritImage() {
    var imageElement = document.getElementById("image3");
    
    if (!toggle) {
        imageElement.style.width = "1200px";
        imageElement.style.height = "800px";
        toggle = true;
    } else {
        imageElement.style.width = "200px";
        imageElement.style.height = "150px";
        toggle = false;
    }
}

