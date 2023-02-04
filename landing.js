/*Scrol to up*/
var mybutton = document.getElementById('up');

window.onscroll =function(){
    'use strict';
    if(window.pageYOffset >= 400){

        mybutton.style.display ='block';
    }
        else{
            mybutton.style.display = 'none';
        }
    };
    mybutton.onclick = function(){
        'use strict';
        window.scrollTo(0,0)
    };
/**/
/*
const tab2 = document.querySelector(".tab2");
tab2.onclick = ()=>{
    tab2.classList.add("s"); //show info box
}
const tab3 = document.querySelector(".tab3");
tab3.onclick = ()=>{
    tab3.classList.add("d"); //show info box
}
*/
/*tab cheng*/

