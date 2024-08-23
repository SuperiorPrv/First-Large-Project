import { Display , searchInput} from "./applicantsDom.js";

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

let atr = '';

searchInput.oninput=(e)=>{
    if(e.target.value.trim()!='')
    {
        atr = e.target.value;
        GetData();
    }
    else
    {
        atr = '';
        GetData();
    }
}

async function AcceptResume(id) {
    try {
        const {data} = await axios.get(API);
        data.forEach((e,i)=>{
            if(e.applicants!=[]){
                e.applicants.forEach((el,i) => {
                    if(el.id==id){
                        el.status="Accepted";
                        PutData(e,e.id);
                    }
                });
            }
        });
    } catch (error) {
        console.error(error);
        
    }
}

async function DeclineResume(id) {
    try {
        const {data} = await axios.get(API);
        data.forEach((e,i)=>{
            if(e.applicants!=[]){
                e.applicants.forEach((el,i) => {
                    if(el.id==id){
                        el.status="Declined";
                        PutData(e,e.id);
                    }
                });
            }
        });
    } catch (error) {
        console.error(error);
        
    }
}

async function PutData(Obj,id) {
    try {
        const response = await axios.put(`${API}/${id}`,Obj);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}


async function GetData() {
    try {
        const {data} = await axios.get(API);
        let Data=[];
        data.forEach((e,i) => {
            if(e.applicants!=[]){
                e.applicants.forEach((el)=>{
                    if(el.name1.includes(atr) || el.name2.includes(atr)) Data.push(el);
                })
            }
        });
        if(Data==[])
        {
            alert('No Applicants found');
        }
        Display(Data);
    } catch (error) {
        console.error(error);
        Display([]);
    }
}



export { GetData,AcceptResume,DeclineResume };