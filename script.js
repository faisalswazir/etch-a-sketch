const container = document.querySelector('.container');
container.style.display = 'flex';
container.style['flex-wrap'] = 'wrap';
container.style.width = '640px';
container.style.height = '640px';
container.style.border = '5px solid grey';

//buttons 
const button16 = document.querySelector('.button16');
const button32 = document.querySelector('.button32');
const button64 = document.querySelector('.button64');
const buttonReset = document.querySelector('.buttonReset');
let divs = [];
let somethingHasBeenDrawn = false;
let totalBoxes;


//colors the divs when hovered



function setHoverOnDivs(){
    divs.forEach(div => {
        div.addEventListener('mouseover',() =>{
            div.style.backgroundColor = 'black';
        });
    });
}

function setResetButton(){
     //reset
     buttonReset.addEventListener('click',()=>{
        somethingHasBeenDrawn = true;
        for(let i = 0; i<totalBoxes; i++){
            divs[i].style.backgroundColor = 'white';
    }
});
    

}


function drawGrid(size){

    if(container.hasChildNodes){
        divs.forEach(d => container.removeChild(d))
    }

    const x = (640/size) - 2;
    totalBoxes = size*size;
    for(let i = 0; i<totalBoxes; i++){

        divs[i] = document.createElement('div')
        divs[i].style.width = `${x}px`;
        divs[i].style.height = `${x}px`;
        divs[i].style.border = '1px solid lightgrey';
        container.appendChild(divs[i]);
    }

    setHoverOnDivs();
    setResetButton();
    
}






// default grid will be 16 by 16
drawGrid(16);

//16x16
button16.addEventListener('click',()=>{
    drawGrid(16);
});

button32.addEventListener('click',()=>{
    drawGrid(32);
});

button64.addEventListener('click',()=>{
    drawGrid(64);
});


















