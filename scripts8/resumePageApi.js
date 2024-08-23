import { Display,jobId } from "./resumePageDom.js";

const API = 'https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs';

async function GetData() {
    try {
        const {data} = await axios.get(API);
        data.forEach((e,i)=>{
            if(e.applicants!=[]){
                e.applicants.forEach((e,i)=>{
                    if(e.id==jobId){
                        Display(e);
                        return;
                    }
                });
            }
        });
    } catch (error) {
        console.error(error);
        
    }
}
export{GetData}