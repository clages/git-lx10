//# Declaraciones
const 
    d = document,
    className = 'active',
    menuButton = d.querySelector('#nav .btn'),
    menuList = d.querySelector('#nav .menu'),
    mapButton = d.querySelector('#footer button.map'),
    mapFrame = d.querySelector('#footer iframe.map')
;
//# Declaraciones
//# Funciones
function toggle(object){
    const { target, btn, val } = object;
    target.classList.toggle(className) ?
    btn.classList.replace(val[0], val[1]) :
    btn.classList.replace(val[1], val[0])
}
//# Funciones
//# Eventos
menuButton.onclick = function(){
    menuList.classList.toggle('active');
}

mapButton.addEventListener('click', (e) => toggle( {
    target: mapFrame,
    btn: e.target,
    className,
    val: ['icon-plus', 'icon-less']
} ) );