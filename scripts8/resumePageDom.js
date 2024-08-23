import { GetData  } from "./resumePageApi.js";

const jobId = localStorage.getItem('jobId');

const Name = document.querySelector('.Name');
const Surname = document.querySelector('.Surname');
const Job = document.querySelector('.Job');
const PhoneNumber = document.querySelector('.PhoneNumber');
const Email = document.querySelector('.Email');
const Location1 = document.querySelector('.Location');
const About = document.querySelector('.About');
const Status = document.querySelector('.Status');

function Display(e) {
    Name.innerHTML = 'Name: '+e.name1;
    Surname.innerHTML = 'Surname: '+e.name2;
    Job.innerHTML = 'Job: '+e.job;
    PhoneNumber.innerHTML = 'Phone number: '+e.phone;
    Email.innerHTML = 'Email: '+e.email;
    Location1.innerHTML = 'Location: '+e.location;
    About.innerHTML = 'About myself: '+e.about;
    Status.innerHTML = 'Status: '+e.status;
}

GetData();

export {Display,jobId};