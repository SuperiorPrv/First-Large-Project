import { PostData } from "./addJobApi.js";

const addJobForm = document.querySelector('.addJobForm');



addJobForm.onsubmit=(e)=>{
    e.preventDefault();
    if(addJobForm.addTitle.value.trim()=='' || addJobForm.addClosingDate.value.trim()=='' ||  addJobForm.addLocation.value.trim()=='' || addJobForm.addPhone.value.trim()=='' || addJobForm.addDescription.value.trim()=='')
    {
        alert('Please fill all fields!')
    }
    else
    {
        let Obj = {
            jobTitle: addJobForm.addTitle.value,
            closingDate: new Date(addJobForm.addClosingDate.value),
            level: addJobForm['addLevel'].value,
            category: addJobForm['addCategory'].value,
            location: addJobForm.addLocation.value,
            phoneNumber: addJobForm.addPhone.value,
            description: addJobForm.addDescription.value,
            applicants:[]
        }
        PostData(Obj);
        addJobForm.reset();
        setTimeout(() => {
            window.location.href = '/adminPanel.html';
        }, 1000);
    }
}