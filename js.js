

let but = document.getElementById('but');
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let b3 = document.getElementById('b3');
let a3 = document.getElementById('a3');
let list = document.getElementById('list');
let poweraa = document.getElementById('poweraa');
let home = document.getElementById('home');
let img = document.getElementById('img');
let pppp = document.getElementById('pppp');




///////////////////////////////////////////معادلة حمولة الواير///////////////////////////////////////////////////
        but.onclick = function(){
            let mans = in1.value * 0.039 ;
            let man = in2.value ;
            if(man == 45){
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" +( Math.pow(mans,2) * 45 / 5).toFixed(2) + ' Ton';
                a3.innerHTML = 'حمل القطع للواير'  +"<br>" + (Math.pow(mans,2) * 45).toFixed(2)  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#00FF7F';
            }else if(man == 42){
                a3.innerHTML = 'حمل القطع للواير'  +"<br>" + Math.pow(mans,2) * 42  + ' Ton';
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" + Math.pow(mans,2) * 42 / 5 + ' Ton' ;
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#00FF7F	';
            }
            
        }


        list.onclick = function(){
            poweraa.style.display = 'block';
            img.style.display = 'none';
            poweraaa.style.display = 'none';
            pppp.style.display = 'none';
        }

/////////////////////////////////////////////معادلة حمولة الواير/////////////////////////////////////////////


        home.onclick = function(){
            poweraa.style.display= 'none';
            poweraaa.style.display= 'none';
            img.style.display= 'block';
            pppp.style.display= 'block';
            

        }


        // عدد الكلبسات لربط الواير////////////////

        let poweraaa = document.getElementById('poweraaa');
        let b4 = document.getElementById('b4');
        let but1 = document.getElementById('but1');
        let in3 = document.getElementById('in3');
        let settings = document.getElementById('settings');

        but1.onclick = function(){
            let m = in3.value * 0.04;
            let mm = m * 4 +1;

            if( mm >= 1 && in3.value !=''){
                b4.innerHTML = Math.ceil(mm);
            }

        }

            settings.onclick = function(){
                poweraa.style.display = 'none';
                img.style.display = 'none';
                pppp.style.display = 'none';
                poweraaa.style.display = 'block';

        }

        // عدد الكلبسات لربط الواير////////////////


        let lista = document.getElementById('lista');
        let div1 = document.getElementById('div1');


            lista.onclick = function(){
                poweraa.style.display = 'none';
                img.style.display = 'none';
                pppp.style.display = 'none';
                poweraaa.style.display = 'none';
                div1.style.display = 'block';

        }






