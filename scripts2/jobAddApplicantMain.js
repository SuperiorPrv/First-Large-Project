import { GetData , PutData } from "./jobAddApplicantApi.js";

const id = localStorage.getItem('id');

const addApplicantForm = document.querySelector('.addApplicantForm');

addApplicantForm.onsubmit=async (e)=>{
    e.preventDefault();
    if(addApplicantForm.addApplicantName1.value.trim()=='' || addApplicantForm.addApplicantName2.value.trim()=='' || addApplicantForm.addApplicantEmail.value.trim()=='' || addApplicantForm.addApplicantPhone.value.trim()=='' || addApplicantForm.addApplicantLocation.value.trim()=='' || addApplicantForm.addApplicantAbout.value.trim()=='')
    {
        alert('Please fill all fields!')
    }
    else
    {
        let data = await GetData();
        console.log(data);
        data.forEach((e,i) => {
            if(e.id == id)
            {
                e.applicants.push({
                    id: Date.now(),
                    name1: addApplicantForm.addApplicantName1.value,
                    name2: addApplicantForm.addApplicantName2.value,
                    email: addApplicantForm.addApplicantEmail.value,
                    phone: addApplicantForm.addApplicantPhone.value,
                    location: addApplicantForm.addApplicantLocation.value,
                    about: addApplicantForm.addApplicantAbout.value,
                    job:e.jobTitle,
                    status:'In Check'
                });
                PutData(e,id);
                return;
            }
        });
        addApplicantForm.reset();
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000);
    }
}