/* Varibles */
const nuevaTareaBtn = document.querySelector('#nuevaTareaBtn')
const pantallaBlanca_NewTarea = document.querySelector('#pantallaBlanca--newTarea')

/* Funciones */
const interfazNewTarea = () =>{
    pantallaBlanca_NewTarea.classList.toggle('pantallaBlanca--off')
    rotarBtnNewTarea()
}
const esconderNewTarea = e =>{
    if(e.target.classList.contains('pantallaBlanca')){
        pantallaBlanca_NewTarea.classList.add('pantallaBlanca--off')
        rotarBtnNewTarea()
    }
}

const rotarBtnNewTarea = () =>{
    nuevaTareaBtn.classList.toggle('nuevaTarea--active')
}
/* Eventos */
nuevaTareaBtn.addEventListener('click', interfazNewTarea)
pantallaBlanca_NewTarea.addEventListener('click', esconderNewTarea)