import {Display} from './dom.js';

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

async function GetData() {
    try {
        const {data:Data} = await axios.get(API);
        Display(Data);
    } catch (error) {
        console.error(error);
        Display([]);
    }
}


export {GetData};