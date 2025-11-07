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
let teation21 = document.getElementById('teation21');
let none1111 = document.getElementById('none1111');
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let W = document.getElementById('W');
let N = document.getElementById('N');
let Len = document.getElementById('Len');
let H = document.getElementById('H');
let but3 = document.getElementById('but3');
//////////////////////////////////////////////////////////////////////////
let Lifting = document.getElementById('Lifting');
let h12 = document.getElementById('h12');
let alnatL12 = document.getElementById('alnatL12');
let Crane = document.getElementById('Crane');
let Maximum = document.getElementById('Maximum');
let Block = document.getElementById('Block');
let Outriggers = document.getElementById('Outriggers');
let Total = document.getElementById('Total');
let Weight = document.getElementById('Weight');
let Contingency = document.getElementById('Contingency');
let Safe = document.getElementById('Safe');
let Totallifted = document.getElementById('Totallifted');
let Dynamic = document.getElementById('Dynamic');
let Calculation = document.getElementById('Calculation');
let Utilization = document.getElementById('Utilization');
let Rated = document.getElementById('Rated');
let Counterweight = document.getElementById('Counterweight');
let Boom = document.getElementById('Boom');
let Radius = document.getElementById('Radius');
let butomz4 = document.getElementById('butomz4');
let but511 = document.getElementById('but511');
let but411 = document.getElementById('but411');
let download = document.getElementById('download');
//////////////////////////////////////////////////////////////////////////
// -------------------------------------------------------------------------
let mn1n1m1 = document.getElementById('mn1n1m1');
let butomzd1 =document.getElementById('butomzd1');
let butomzd2 =document.getElementById('butomzd2');
let butomzd3 =document.getElementById('butomzd3');
//--------------------------------------------------------------------------
    let b44 = document.getElementById('b44');
    let prcentcreans = document.getElementById('prcentcreans');
    let prcentcrean1 = document.getElementById('prcentcrean1');
    let prcentcreansbut = document.getElementById('prcentcreansbut');

    but3.onclick = function(){
        if(W.value !=''){
            let teation1 = (W.value / N.value )*(  Len.value / H.value);

            t1.innerHTML =  teation1.toFixed(2) + ' >> Ton';
            t1.style.borderRadius = '12px';
            t1.style.padding = '10px';
            t1.style.background = '#00FF7F';
        }
    }

///////////////////////////////////////////معادلة حمولة الواير///////////////////////////////////////////////////
        but.onclick = function(){
            let mans = in1.value * 0.039 ;
            let man = in2.value ;
            if(man == 45){
                b3.innerHTML = 'Safe Working Load '  + "<br>" + 'حد التشغيل الامن'+"<br>" +( Math.pow(mans,2) * 45 / 5).toFixed(2) + ' Ton';
                a3.innerHTML = 'Ultimate Load'  +"<br>"+ 'حد الانهيار'+"<br>" + (Math.pow(mans,2) * 45).toFixed(2)  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#00FF7F';
            }else if(man == 42){
                a3.innerHTML = 'Ultimate Load'  +"<br>" + 'حد الانهيار'+"<br>" +( Math.pow(mans,2) * 42).toFixed(2)  + ' Ton';
                b3.innerHTML = 'Safe Working Load '  +"<br>" + 'حد التشغيل الامن'+"<br>" +( Math.pow(mans,2) * 42 / 5).toFixed(2) + ' Ton' ;
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#00FF7F';
            }
            
        }
        list.onclick = function(){
            poweraa.style.display = 'block';
            img.style.display = 'none';
            poweraaa.style.display = 'none';
            pppp.style.display = 'none';
            teation21.style.display = 'none';
            div1.style.display = 'none';
            mn1n1m1.style.display = 'none';
            butomzd1.style.display= 'none';
            butomzd2.style.display= 'none';
            Lifting.style.display = 'none';
            alnatL12.style.display = 'none';
            but511.style.display = 'none';
            download.style.display = 'none';
            c.style.display = 'none';      
        }
/////////////////////////////////////////////معادلة حمولة الواير/////////////////////////////////////////////
        home.onclick = function(){
            mn1n1m1.style.display= 'block';
            poweraa.style.display= 'none';
            poweraaa.style.display= 'none';
            img.style.display= 'block';
            div1.style.display= 'none';
            pppp.style.display= 'block';
            teation21.style.display= 'none';
            butomzd1.style.display= 'none';
            butomzd2.style.display= 'none';
            Lifting.style.display = 'none';
            alnatL12.style.display = 'none';
            but511.style.display = 'none';
            download.style.display = 'none';
            c.style.display = 'none';
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
                b4.style.background = '#00FF7F';
            }
        }
            settings.onclick = function(){
                poweraa.style.display = 'none';
                img.style.display = 'none';
                pppp.style.display = 'none';
                div1.style.display = 'none';
                poweraaa.style.display = 'block';
                teation21.style.display = 'none';
                mn1n1m1.style.display = 'none';
                butomzd1.style.display= 'none';
                butomzd2.style.display= 'none';
                Lifting.style.display = 'none';
                alnatL12.style.display = 'none';
                but511.style.display = 'none';
                download.style.display = 'none';
                c.style.display = 'none';
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
                teation21.style.display = 'none';
                mn1n1m1.style.display = 'none';
                butomzd1.style.display= 'none';
                butomzd2.style.display= 'none';
                Lifting.style.display = 'none';
                alnatL12.style.display = 'none';
                but511.style.display = 'none';
                download.style.display = 'none';
                c.style.display = 'none';
        }
    let alnatL11 = document.getElementById('alnatL11');
    let alnatL21 = document.getElementById('alnatL21');
    let W11 = document.getElementById('W11');
    let D11 = document.getElementById('D11');
    let D21 = document.getElementById('D21');
    let L11= document.getElementById('L11');
    let L21 = document.getElementById('L21');
    let H11 = document.getElementById('H11');
    let but41 = document.getElementById('but41');
    let but51 = document.getElementById('but51');
    but41.onclick = function(){
        if(W11.value && D11.value && D21.value && L11.value && L21.value && H11.value !=''){
                let bast11 = W11.value * D21.value * L11.value ;
                let mkam11 = H11.value * (+D11.value + +D21.value);
                alnatL11.innerHTML = 'tension wire-1 >>' + (bast11 / mkam11).toFixed(1) + 'Ton';
                alnatL11.style.background = '#00ff3c';
                alnatL21.style.background = '#009eff';
                let bast21 = W11.value * D11.value * L21.value;
                let mkam21 = H11.value * (+D11.value + +D21.value);
                alnatL21.innerHTML = 'tension wire-2  >>'+ (bast21 / mkam21).toFixed(1) + 'Ton';
                alnatL11.style.display = 'block';
                alnatL21.style.display = 'block';
        }
    }
    but51.onclick = function(){
        W11.value = '';
        D11.value = '';
        D21.value = '';
        L11.value = '';
        L21.value = '';
        H11.value = '';
        alnatL11.style.display = 'none';
        alnatL21.style.display = 'none';
        Lifting.style.display = 'none';
        alnatL12.style.display = 'none';
        but511.style.display = 'none';
    }
    none1111.onclick = function(){
        poweraa.style.display = 'none';
        img.style.display = 'none';
        pppp.style.display = 'none';
        poweraaa.style.display = 'none';
        teation21.style.display = 'block';
        div1.style.display = 'none';
        mn1n1m1.style.display = 'none';
        butomzd1.style.display= 'none';
        butomzd2.style.display= 'none';
        Lifting.style.display = 'none';
        alnatL12.style.display = 'none';
        but511.style.display = 'none';
        download.style.display = 'none';
        c.style.display = 'none';
    }
// ---------------------------------------------------------------------
    butomz1.onclick = function(){
        teation21.style.display = 'none';
        poweraa.style.display = 'none';
        img.style.display = 'none';
        pppp.style.display = 'none';
        poweraaa.style.display = 'none';
        div1.style.display = 'none';
        mn1n1m1.style.display = 'none';
        Lifting.style.display = 'none';
        alnatL12.style.display = 'none';
        butomzd1.style.display = 'block';
        but511.style.display = 'none';
        download.style.display = 'none';
        c.style.display = 'none';
    }
    butomz2.onclick = function(){
        teation21.style.display = 'none';
        poweraa.style.display = 'none';
        img.style.display = 'none';
        pppp.style.display = 'none';
        poweraaa.style.display = 'none';
        div1.style.display = 'none';
        mn1n1m1.style.display = 'none';
        butomzd1.style.display = 'none';
        Lifting.style.display = 'none';
        alnatL12.style.display = 'none';
        but511.style.display = 'none';
        download.style.display = 'none';
        butomzd2.style.display = 'block';
        c.style.display = 'none';
    }
//------------------------------------------------------------------------
prcentcreansbut.onclick = function(){
    let yosaue = prcentcrean1.value / prcentcreans.value * 100 ;
    if(yosaue <= 75 ){
        b44.innerHTML = yosaue.toFixed(1) + '%' + '<br>' + 'Safe';
        b44.style.background = 'gold';
    }else{
        b44.innerHTML = yosaue.toFixed(1) + '%' + '<br>' + 'Unsafe';
        b44.style.background = 'red';
    }
}
////////////////////////////////////////////////////////////////////////////////////
but411.onclick = function(){

    if(Weight.value && Boom.value && Radius.value !=''){
        let d = Weight.value  * Contingency.value ;
        let e = +d + +Total.value / 1000 + +Block.value /1000 ;
        let w = e * Dynamic.value ;
        let uf = +w / +Rated.value * 100 ;
        let vetha = Math.sqrt(Math.pow(Boom.value,2) - Math.pow(Radius.value,2)).toFixed(2)  ; 
        let vetha1 = Math.acos(Radius.value / Boom.value) * (180 / Math.PI) ;
        alnatL12.innerHTML = "* Lifting Plan: " + "<br>" + "<br>" 
        + '1- Crane Model & Manufacturer : '+ Crane.value + "<br>" 
        + '2- Maximum Capacity(SWL): '+ Maximum.value + ' Ton' + "<br>" 
        + '3- Block Weight(Kg)--(b)  : ' + Block.value + " Kg" + "<br>" 
        + '4- Boom Length : '+ Boom.value +  " m" +"<br>" 
        + '5- Radius : '+ Radius.value + ' m'+ "<br>" 
        + '6- Counterweight : '+ Counterweight.value + ' Ton'+ "<br>" 
        + '7- Outriggers : '+ Outriggers.value + ' %'+ "<br>" 
        + '8- Rated Capacity--(RC) : '+ Rated.value + ' Ton'+ "<br>" 
        + '9- Total Weight of Gears(Kg)--(c) : '+ Total.value + ' Kg'+ "<br>" 
        + '10- Load Weight(a) : '+ Weight.value + ' Ton'+ "<br>" 
        + '11- Contingency Factor (CF) : '+ Contingency.value  +  "<br>" 
        + '12- Safe Load Weight (d)(d=aXCF) = '+ d.toFixed(2) + "<br>" 
        + '13- Total lifted weight(e)(e=d+c+b) = '+ e.toFixed(2) + "<br>" 
        + '14- Dynamic Amplification Factor(DAF) = '+ Dynamic.value +  "<br>" 
        + '15- Calculation Weight(w)(w=e*DAF) = '+ w.toFixed(2) +  "<br>" 
        + '16- Utilization Factor(UF)(UF=w/RC) = '+ uf.toFixed(2)  + ' %' + "<br>" 
        + '------------------------------------------------' + "<br>" 
        + "* Angles : " + "<br>" + "<br>" 
        + "17- Height = " + vetha + " m" + "<br>"
        + "18- Angle Boom = " + vetha1.toFixed(1) + ' ْ' + "<br>"
        + "19- Crane Support  = " + (Math.sqrt( Maximum.value / 5) * 30.48).toFixed(2)  + "cm";
        Lifting.style.display = 'none';
        but511.style.display = 'block';
        download.style.display = 'block';
        alnatL12.style.display = 'block';
    }
}
but511.onclick = function(){
    Lifting.style.display = 'block';
    alnatL12.style.display = 'none';
    but511.style.display = 'none';
    download.style.display = 'none'; 
    c.style.display = 'none';
}
butomz4.onclick = function(){
        Lifting.style.display = 'block';
        teation21.style.display = 'none';
        poweraa.style.display = 'none';
        img.style.display = 'none';
        pppp.style.display = 'none';
        poweraaa.style.display = 'none';
        div1.style.display = 'none';
        mn1n1m1.style.display = 'none';
        butomzd1.style.display = 'none';
        butomzd2.style.display = 'none';
        c.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////
let c = document.getElementById('c');
let butomz3 = document.getElementById('butomz3');
butomz3.onclick = function(){
        Lifting.style.display = 'none';
        teation21.style.display = 'none';
        poweraa.style.display = 'none';
        img.style.display = 'none';
        pppp.style.display = 'none';
        poweraaa.style.display = 'none';
        div1.style.display = 'none';
        mn1n1m1.style.display = 'none';
        butomzd1.style.display = 'none';
        butomzd2.style.display = 'none';
        c.style.display = 'block';
}


