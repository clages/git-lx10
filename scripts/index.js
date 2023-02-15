//# Declaraciones
const 
    d = document,
    menuButton = d.querySelector('#nav .btn'),
    menuList = d.querySelector('#nav .menu')
;
//# Declaraciones
//# Funciones

//# Funciones
//# Eventos
menuButton.onclick = function(){
    menuList.classList.toggle('active');
}
//# Eventos