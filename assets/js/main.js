//Math.floor nos sirve para desechar los decimales y ocupar solo la parte entera de un número.
//Math.random genera un numero al azar o aleatorio

const opt = () => Math.floor(Math.random()*3);
let rondas = 0;
const d = document;




const validar = (arg) => {
    return !isNaN(parseFloat(arg)) && isFinite(arg);
}

const positivo = (n) =>{
    if(validar(n) && n>=0){
        return true;
    }else{
        return false;
    };
}

const btns = d.querySelectorAll('.btn-group-vertical>button');
const disBtns = (vf) => {
    btns.forEach(e => {
        e.disabled = vf;
    });
}

disBtns(true);
const rounds = () => {
    rondas = d.getElementById("rondas").value;
    
    if (positivo(rondas)) {
        do {
            d.getElementById('rounds').disabled = true;
            disBtns(false);
        } while (rondas === 0);
            d.getElementById("rondas").value = '';
            d.getElementById('jugaras').innerHTML = `Jugarás ${rondas} ronda/s`;
            return (rondas);

    } else {
        d.getElementById("rondas").value = ''
        return alert("Debes ingresar un número o el número ingresado no es valido");
    }
}

const elegi = (player) => {
    let p = player;
    let cpu = opt();
    if (0<rondas){
        let resultado = res(p, cpu);
        rondas--;
        d.getElementById('jugaras').innerHTML = `Jugarás ${rondas} ronda/s`;
        d.getElementById('resultado').innerHTML = ` <h5> ${resultado} </h5>`
        // console.log(resultado)
    }
    if (rondas === 0) {
        d.getElementById('rounds').disabled = false;
        disBtns(true);
        d.getElementById('jugaras').innerHTML = '';
    }
};

const res = (p, c) => {
    const j = ["papel", "tijera", "piedra"];
    const v = ["gana", "empata", "pierde"];

    const r = ((p - c + 2) % 1.5) * 2;
    //console.log(r)

    return `<h4> El jugador ${v[r]}: </h4> El jugador eligió ${j[p]} y la cónsola eligió ${j[c]}.`;
}






