import {Display,selectCategory,selectLevel} from './jobSearchDom.js';

const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

let atr1='',atr2='';

selectCategory.onchange=(e)=>{
    if(e.target.value!='All')
    {
        atr1="?&category="+e.target.value;
        GetData();
    }
    else
    {
        atr1='';
        GetData();
    }
}

selectLevel.onchange=(e)=>{
    if(e.target.value!='All')
    {
        if(atr1=='') atr2='?&level='+e.target.value;
        else atr2="&level="+e.target.value;
        GetData();
    }
    else
    {
        atr2='';
        GetData();
    }
}

async function GetData() {
    try {
        const {data:Data} = await axios.get(API+atr1+atr2);
        Display(Data);
    } catch (error) {
        console.error(error);
        Display([]);
    }
}


export {GetData};