/* Varibles */
const nuevaTareaBtn = document.querySelector('#nuevaTareaBtn')
const pantallaBlanca_NewTarea = document.querySelector('#pantallaBlanca--newTarea')
const conteinerTareas = document.querySelector('.tareas')
const inputNameTarea = document.querySelector('#inputNameTarea')
const inputCategoriaTarea = document.querySelector('#inputCategoria')
const crearTareaBtn = document.querySelector('#crearTareaBtn')
const superTareaBtn = document.querySelector('#superTareaBtn')


/* Funciones */
const interfazNewTarea = () => {
    pantallaBlanca_NewTarea.classList.toggle('pantallaBlanca--off')
    rotarBtnNewTarea()
    resetInputs()
}
const esconderNewTarea = e => {
    if(e.target.classList.contains('pantallaBlanca')){
        pantallaBlanca_NewTarea.classList.add('pantallaBlanca--off')
        rotarBtnNewTarea()
        resetInputs()
    }
}

const rotarBtnNewTarea = () => {
    nuevaTareaBtn.classList.toggle('nuevaTarea--active')
}
const activarSuperTarea = () => {
    superTareaBtn.classList.toggle('form_star--active')

}

const crearTarea = e =>{
    e.preventDefault()
    

    /* Extraer datos html */
    const nameTarea = inputNameTarea.value
    const categoriaTarea = inputCategoriaTarea.value
    const superTarea = superTareaBtn.classList.contains('form_star--active')
    console.log(superTarea)

    /* Crear Estructura tarea */
    const contenedorTarea = document.createElement('div')
    const contenedorName = document.createElement('p')
    const contedorIcon = document.createElement('i')

    /* Agregar informacion de la tarea y clases */
    contenedorTarea.classList.add('tarea')

    contenedorName.textContent = nameTarea
    contenedorName.classList.add('tarea_name')

    switch(categoriaTarea){
        case 'trabajo': 
            contedorIcon.classList.add('fa-solid', 'fa-briefcase', 'tarea_icon' )
            break
        case 'deportes':
            contedorIcon.classList.add('fa-solid', 'fa-person-snowboarding', 'tarea_icon' )
            break    
        case 'salud':
            contedorIcon.classList.add('fa-solid', 'fa-heart-pulse', 'tarea_icon')
            break
        case 'arte':
            contedorIcon.classList.add('fa-solid', 'fa-palette', 'tarea_icon')
            break
        case 'entretenimiento':
            contedorIcon.classList.add('fa-solid', 'fa-gamepad', 'tarea_icon')
            break
        case 'familia':
            contedorIcon.classList.add('fa-solid', 'fa-people-roof', 'tarea_icon')
            break
        case 'compras':
               contedorIcon.classList.add('fa-solid', 'fa-cart-shopping', 'tarea_icon')
               break
        case 'otro':
            contedorIcon.classList.add('fa-solid', 'fa-paper-plane', 'tarea_icon')
            break
        default: contedorIcon.classList.add('fa-solid', 'fa-paper-plane', 'tarea_icon')
    }

    /* Agrupar elementos */
    contenedorTarea.appendChild(contenedorName)
    contenedorTarea.appendChild(contedorIcon)

    /* Comprobar si es una Super Tarea */
    if(superTarea){
        contenedorTarea.classList.add('superTarea')
    }

    /* Inyectar al HTML */
    conteinerTareas.insertAdjacentElement('afterbegin', contenedorTarea)

    /* Esconder Modal */
    pantallaBlanca_NewTarea.classList.add('pantallaBlanca--off')
    rotarBtnNewTarea()
    resetInputs()



}

const resetInputs = () => {
    inputNameTarea.value = ''
    inputCategoriaTarea.value = 'selecciona'
    superTareaBtn.classList.remove('form_star--active')
}
/* Eventos */
nuevaTareaBtn.addEventListener('click', interfazNewTarea)
pantallaBlanca_NewTarea.addEventListener('click', esconderNewTarea)
superTareaBtn.addEventListener('click', activarSuperTarea)
crearTareaBtn.addEventListener('click', crearTarea)