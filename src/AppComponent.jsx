/* function showMessage() {
    return 'Hola Mundo'
} */
const AppComponent = ({ cadena, puesto }) => {
    //console.log(props.cadena);
    return (
        <div>
            <span>Bienvenido {cadena}, Especialista en: {puesto}</span>
        </div>
    )
}

export default AppComponent


AppComponent.defaultProps = {
    cadena: 'Usuario no encontrado',
    puesto: 'Sin Puesto'
}

