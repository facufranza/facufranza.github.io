let datos = [
    {id: 1, titulo: 'Carne', cantidad: 12, precio: 2500},
    {id: 2, titulo: 'Jabon', cantidad: 15, precio: 3000}
]

let datosPrevios = []

const btnAgregar = document.querySelector("#btnAgregar")
const inpBusqueda = document.querySelector("#inpBusqueda")
const btnDeshacer = document.querySelector("#btnDeshacer")
const inpAgregar = document.querySelector("#inpAgregar")
const galeria = document.querySelector("#galeria")
const lnkLimpiarLista = document.querySelector("#lnkLimpiarLista")

const template = ({titulo, cantidad, precio}) => `
                    <div class="item">
                    <div class="titulo">
                    ${titulo}
                    </div>
                    <div class="controles">
                        <span>${cantidad}</span>
                        <span>${precio}</span>
                    </div>
                    <div class="borrar">
                    <a href="#" class="borrar">Eliminar</a>
                    </div>
                    </div>`

function render(lista = [{titulo: '', cantidad: '0', precio: '0'}]){
    galeria.innerHTML= ''
    lista.forEach(item => {
        galeria.innerHTML += template(item)
    })
}

document.addEventListener('DOMContentLoader', ()=> {
    render(datos)
})

btnAgregar.addEventListener('click', ()=> {
    datosPrevios = datos.slice(0)
    datos.push({
        titulo: inpAgregar.value,
        cantidad: 1,
        precio: 10,
    })
    render(datos)
    inpAgregar.value = ''
})

btnDeshacer.addEventListener('click', ()=> {
    datos = datosPrevios
    render(datos)
})

inpBusqueda.addEventListener('input', e => {
    let vista = datos.filter((val)=> {
        if (val.titulo.includes(e.target.value)) {
            return true
        } else {
            return false
        }
    })
    render(vista)
})

lnkLimpiarLista.addEventListener('click', ()=> {
    datosPrevios = datos.slice(0)
    datos = []
    render(datos)

})