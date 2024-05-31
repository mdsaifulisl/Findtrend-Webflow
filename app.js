// header
const nav = document.querySelector('.nav')
const resp = document.querySelector('.mml');

resp.onclick = () =>{
    nav.classList.toggle('active');
}
window.onscroll = () =>{
    nav.classList.remove('active');
}


function chackmoney(){


    const input1 = document.querySelector(".input1");
    const input2 = document.querySelector(".input2");


    let money1 = document.querySelector(".money1");
    let cngm1 = "$100";
    let mon1 = money1.textContent;
    console.log(mon1)

    let money2 = document.querySelector(".money2");
    let cngm2 = "$200";
    let mon2 = money2.textContent;

    let money3 = document.querySelector(".money3");
    let cngm3 = "$300";
    let mon3 = money3.textContent;

    input2.addEventListener("click", ()=>{
        money1.innerHTML = cngm1;
        money2.innerHTML = cngm2;
        money3.innerHTML = cngm3;
    });

    input1.addEventListener("click", ()=>{
        money1.innerHTML = mon1;
        money2.innerHTML = mon2;
        money3.innerHTML = mon3;
    });


}

chackmoney()

