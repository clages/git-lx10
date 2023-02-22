//# Declaraciones
const 
    d = document,
    menuButton = d.querySelector('#nav .btn'),
    menuList = d.querySelector('#nav .menu'),
    mapButton = d.querySelector('#footer button.map'),
    mapFrame = d.querySelector('#footer iframe.map')
;
//# Declaraciones
//# Funciones

//# Funciones
//# Eventos
menuButton.onclick = function(){
    menuList.classList.toggle('active');
}
mapButton.addEventListener('click', () =>{
    mapFrame.classList.toggle('active');
})
//# Eventos