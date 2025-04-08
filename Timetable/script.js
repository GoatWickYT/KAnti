const hideTable = () => {
    document.getElementById("fullTable").style.display="none";
    document.getElementById("oneDay").style.display="table";
}

const fillNewTable = (dayName, class0, class1, class2, class3, class4, class5, class6, class7, class8, class9, class10) => {
    document.getElementById("dayName").innerHTML = dayName;
    document.getElementById("class0").innerHTML = class0;
    document.getElementById("class1").innerHTML = class1;
    document.getElementById("class2").innerHTML = class2;
    document.getElementById("class3").innerHTML = class3;
    document.getElementById("class4").innerHTML = class4;
    document.getElementById("class5").innerHTML = class5;
    document.getElementById("class6").innerHTML = class6;
    document.getElementById("class7").innerHTML = class7;
    document.getElementById("class8").innerHTML = class8;
    document.getElementById("class9").innerHTML = class9;
    document.getElementById("class10").innerHTML = class10;
}

const showTable = () => {
    document.getElementById("fullTable").style.display="table";
    document.getElementById("oneDay").style.display="none";
}

window.onclick = (object) => {
    let monday = document.querySelectorAll(".monday");
    let tuesday = document.querySelectorAll(".tuesday");
    let wednesday = document.querySelectorAll(".wednesday");
    let thursday = document.querySelectorAll(".thursday");
    let friday = document.querySelectorAll(".friday");
    
    monday.forEach(element => {if (element === object.target){mondayClicked();}});
    tuesday.forEach(element => {if (element === object.target){tuesdayClicked();}});
    wednesday.forEach(element => {if (element === object.target){wednesdayClicked();}});
    thursday.forEach(element => {if (element === object.target){thursdayClicked();}});
    friday.forEach(element => {if (element === object.target){fridayClicked();}});
}

const mondayClicked = () => {
    hideTable();
    fillNewTable(
        dayName="Monday",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    );
}

const tuesdayClicked = () => {
    hideTable();
    fillNewTable(
        dayName="Tuesday",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    );
}

const wednesdayClicked = () => {
    hideTable();
    fillNewTable(
        dayName="Wednesday",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    );
}

const thursdayClicked = () => {
    hideTable();
    fillNewTable(
        dayName="Thursday",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    );
}

const fridayClicked = () => {
    hideTable();
    fillNewTable(
        dayName="Friday",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    );
}