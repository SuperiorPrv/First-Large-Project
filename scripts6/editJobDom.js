import { GetData , PutData } from "./editJobApi.js";

const editJobForm = document.querySelector('.editJobForm');
const editId = localStorage.getItem('editId');

let data = await GetData(); 


editJobForm.editTitle.value = data.jobTitle;
editJobForm.editClosingDate.value = new Date(data.closingDate).getFullYear()+'-'+(new Date(data.closingDate).getMonth()<9?''+new Date(data.closingDate).getMonth()+1:new Date(data.closingDate).getMonth()+1)+'-'+(new Date(data.closingDate).getDate()<10?'0'+new Date(data.closingDate).getDate():new Date(data.closingDate).getDate());
editJobForm.editLevel.value = data.level;
editJobForm.editCategory.value = data.category;
editJobForm.editPhone.value = data.phoneNumber;
editJobForm.editLocation.value = data.location;
editJobForm.editDescription.value = data.description;

editJobForm.onsubmit=(e)=>{
    e.preventDefault();
    if(editJobForm.editTitle.value.trim()=='' || editJobForm.editClosingDate.value.trim()=='' || editJobForm.editPhone.value.trim()=='' || editJobForm.editLocation.value.trim()=='' || editJobForm.editDescription.value.trim()=='')
    {
        alert('Please fill all fields!');
    }
    else
    {
        let Obj={
            jobTitle:editJobForm.editTitle.value,
            closingDate: new Date(editJobForm.editClosingDate.value),
            level: editJobForm.editLevel.value,
            category: editJobForm.editCategory.value,
            phoneNumber: editJobForm.editPhone.value,
            location: editJobForm.editLocation.value,
            description: editJobForm.editDescription.value,
            applicants:[]
        }
        PutData(Obj,editId);
        editJobForm.reset();
        setTimeout(()=>{window.location.href = "adminPanel.html";},1000)
    }
}

export { editId }