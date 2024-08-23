import { DeleteData } from "./adminPanelApi.js";

const box2 = document.querySelector('.box2');

const searchInput = document.querySelector('.searchInput');

function Display(Data) {
    box2.innerHTML='';
    Data.forEach((e,i) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td8_1 = document.createElement('a');
        let td8_2 = document.createElement('a');
        td1.innerHTML = e.jobTitle;
        td2.innerHTML = e.category;
        td3.innerHTML = e.level;
        td4.innerHTML = e.location;
        td5.innerHTML = e.phoneNumber;
        e.applicants.forEach((el)=>{
            td6.innerHTML = el.name1 + " " + el.name2;
            return;
        });
        td7.innerHTML = new Date(e.closingDate).toDateString();
        td8_1.innerHTML = "Edit";
        td8_1.classList.add("s4_td8_1");
        td8_1.onclick=()=>{
            localStorage.setItem('editId',e.id);
            window.location.href='./editJob.html';
        }
        td8_2.innerHTML = "Delete";
        td8_2.classList.add("s4_td8_2");
        td8_2.onclick=()=>{
            DeleteData(e.id);
        }
        td8.append(td8_1,td8_2);
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        box2.appendChild(tr);
    });
}

export {Display,searchInput};