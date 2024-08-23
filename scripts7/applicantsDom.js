import { AcceptResume ,DeclineResume} from "./applicantsApi.js";

const box2 = document.querySelector('.box2');

const searchInput = document.querySelector('.searchInput');

function Display(Data) {
    box2.innerHTML = '';
    Data.forEach((e,i) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td7_1 = document.createElement('button');
        let td7_2 = document.createElement('button');
        let td7_3 = document.createElement('button');
        td1.innerHTML = e.name1 + ' ' + e.name2;
        td2.innerHTML = e.email;
        td3.innerHTML = e.location;
        td4.innerHTML = e.phone;
        td5.innerHTML = e.status;
        td6.innerHTML = e.job;
        td7_1.innerHTML = 'See Resume';
        td7_1.classList.add('s7_td7_1');
        td7_1.onclick = () => {
            localStorage.setItem('jobId', e.id);
            window.location.href='/resumePage.html';
        };
        td7_2.innerHTML = 'Accept Resume';
        td7_2.classList.add('s7_td7_2');
        td7_2.onclick = () => {
            AcceptResume(e.id);
        };
        td7_3.innerHTML = 'Decline Resume';
        td7_3.classList.add('s7_td7_3');
        td7_3.onclick = () => {
            DeclineResume(e.id);
        };
        td7.append(td7_1, td7_2, td7_3);
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        box2.appendChild(tr);
    });
}

export {Display,searchInput};