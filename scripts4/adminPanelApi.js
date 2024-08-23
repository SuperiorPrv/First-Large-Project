import { Display, searchInput } from "./adminPanelDom.js";

const API = 'https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs'

let atr = '';

searchInput.oninput=(e)=>{
    if(e.target.value.trim()!='')
    {
        atr = '?&jobTitle='+e.target.value;
        GetData();
    }
    else
    {
        atr = '';
        GetData();
    }
}

async function DeleteData(id) {
    try {
        const response = await axios.delete(`${API}/${id}`);
        GetData();
    } catch (error) {
        console.error(error);
        
    }
}

async function GetData() {
    try {
        const {data} = await axios.get(API+'/'+atr);
        Display(data);
    } catch (error) {
        console.error(error);
        Display([]);
    }
}

export { GetData , DeleteData};