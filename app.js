let negative = document.querySelector('.negative');
let positive = document.querySelector('.positive');
let count = document.querySelector('.count');
let reset = document.querySelector('.resetCTA');


let startCount = 0;

// if(startCount==0){
//     reset.style.display='none';
// }




function posTap() {
    startCount = startCount + 1;
    count.textContent = startCount;
}

positive.addEventListener('click', posTap);


function negTap() {
    startCount = startCount - 1;
    count.textContent = startCount;
}

negative.addEventListener('click', negTap);



function resetCount() {
    if (count != 0) {
        // reset.style.display='block';
        startCount = 0;
        count.textContent = startCount;
    }
}
reset.addEventListener('click', resetCount);

