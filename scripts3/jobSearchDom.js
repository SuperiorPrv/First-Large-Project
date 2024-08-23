const box = document.querySelector('.box');

const selectCategory = document.querySelector('.selectCategory');
const selectLevel = document.querySelector('.selectLevel');

function Display(Data) {
    box.innerHTML = '';
    Data.forEach((e,i) => {
        let card = document.createElement('div');
        card.classList.add('card');
        let block1 = document.createElement('div');
        let block2 = document.createElement('div');
        let block3 = document.createElement('div');
        let block1_1 = document.createElement('h2');
        let block1_2 = document.createElement('span');
        let block2_1 = document.createElement('p');
        let block3_1 = document.createElement('a');
        let block3_2 = document.createElement('h5');
        block1_1.innerHTML = e.jobTitle;
        block1_2.innerHTML = e.level;
        block2_1.innerHTML = e.category;
        block3_1.innerHTML = 'See More';
        block3_1.href = "./jobAbout.html";
        block3_1.onclick=()=>{
            localStorage.setItem('id',e.id);
        }
        block3_2.innerHTML = e.location;
        block1.append(block1_1,block1_2);
        block2.appendChild(block2_1);
        block3.append(block3_1,block3_2);
        card.append(block1,block2,block3);
        box.appendChild(card);
    });
}

export {Display,selectCategory,selectLevel};