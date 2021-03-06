window.onload = ()=>{
    // Declaración de variables
    h= 0; m= 0; s= 0; mls= 0; timeStarted= 0;
    // Span que muestrá los valores del cronómetro
    time = document.getElementById("time");
    // Botón para iniciar cronómetro
    btnStart = document.getElementById("btn-start");
    // Botón para detener el cronómetro
    btnStop = document.getElementById("btn-stop");
    // Botón para reiniciar el cronómetro
    btnReset = document.getElementById("btn-reset");
    events();
};

function events(){
    // Adición de evento click a botones
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
}

function write(){
    // Declaración de variables hora, minuto, segundo, milisegundo
    let ht, mt, st, mlst;
    mls ++;

    // Se reinician valores cuando llegan a su máximo valor
    if(mls > 99){ s++; mls=0; }
    if(s > 59){ m++; s= 0; }
    if(m > 59){ h++; m= 0; }
    if(h > 24) h= 0;

    // Se extrae el cero que se agrega automaticamente
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

    // Se muestran los valores numericos en el Span 
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start(){
    // Se inicia el cronómetro
    write();
    timeStarted = setInterval(write, 10);
    // Se desactiva el evento click del botón Start
    btnStart.removeEventListener("click", start);
    // Se oculta el botón Start y se muestran los botones Stop y Reset
    document.getElementById('btn-start').style.display = 'none';
    document.getElementById('btn-stop').style.display = 'flex';
    document.getElementById('btn-reset').style.display = 'flex';
}

function stop(){
    // Se detiene el cronómetro
    clearInterval(timeStarted);
    // Se habilita el evento click del botón Start
    btnStart.addEventListener("click", start);
    // Se oculta el botón Stop y luego se muestra el botón Start
    document.getElementById('btn-stop').style.display = 'none';
    document.getElementById('btn-start').style.display = 'flex';
}

function reset(){
    // Se reinicia el cronómetro
    clearInterval(timeStarted);
    // Se reinician todos los valores del cronómetro
    time.innerHTML = "00:00:00.00";
    h= 0; m= 0; s= 0; mls= 0;
    btnStart.addEventListener("click", start);
    // Se ocultan los botones Stop y Reset, y luego se muestra el botón Start
    document.getElementById('btn-stop').style.display = 'none';
    document.getElementById('btn-reset').style.display = 'none';
    document.getElementById('btn-start').style.display = 'flex';
}