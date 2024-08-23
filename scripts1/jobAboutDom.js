const id = localStorage.getItem('id');

const jobTitle = document.querySelector('.jobTitle');
const closingDate = document.querySelector('.closingDate');
const category = document.querySelector('.category');
const level = document.querySelector('.level');
const location = document.querySelector('.location');
const phoneNumber = document.querySelector('.phoneNumber');
const description = document.querySelector('.description');

function Display(Obj) {
    jobTitle.innerHTML = Obj.jobTitle;
    closingDate.innerHTML = new Date(Obj.closingDate).toDateString();
    category.innerHTML = Obj.category;
    level.innerHTML = Obj.level;
    location.innerHTML = Obj.location;
    phoneNumber.innerHTML = Obj.phoneNumber;
    description.innerHTML = Obj.description;
}

export {Display,id};
