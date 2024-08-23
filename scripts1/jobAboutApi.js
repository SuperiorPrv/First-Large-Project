import { Display,id } from "./jobAboutDom.js";

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

async function GetData() {
    try {
        const {data:Data} = await axios.get(API+'/'+id);
        Display(Data);
    } catch (error) {
        console.error(error);
        
    }
}

export {GetData}