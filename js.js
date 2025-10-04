

let but = document.getElementById('but');
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let b3 = document.getElementById('b3');
let a3 = document.getElementById('a3');
let list = document.getElementById('list');
let poweraa = document.getElementById('poweraa');
let home = document.getElementById('home');




        but.onclick = function(){
            let mans = in1.value * 0.039 ;
            let man = in2.value ;
            if(man == 45){
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" +( Math.pow(mans,2) * 45 / 5).toFixed(2) + ' Ton';
                a3.innerHTML = 'الحمل القطع للواير'  +"<br>" + (Math.pow(mans,2) * 45).toFixed(2)  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#ffe600c2';
            }else if(man == 42){
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" + Math.pow(mans,2) * 42 / 5).toFixed(2) + ' Ton' ;
                a3.innerHTML = 'الحمل القطع للواير'  +"<br>" + Math.pow(mans,2) * 42).toFixed(2)  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#ffe600c2';
            }
            
        }


        list.onclick = function(){
            poweraa.style.display = 'block';

        }
        home.onclick = function(){
            location.reload()
        }

