const API = "https://66c2cf27d057009ee9bdf8d3.mockapi.io/todoapp/Jobs";

async function PostData(Obj) {
    try {
        const response = await axios.post(API,Obj);
    } catch (error) {
        console.error(error);
        
    }
}

export {PostData};