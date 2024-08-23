import { editId } from "./editJobDom.js";

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

async function PutData(Obj,id) {
    try {
        const response = await axios.put(`${API}/${id}`,Obj);
    } catch (error) {
        console.error(error);
        
    }
}

async function GetData() {
    try {
        const {data} = await axios.get(API+'/'+editId);
        return data;
    } catch (error) {
        console.error(error);
        
    }
}
export {GetData , PutData};