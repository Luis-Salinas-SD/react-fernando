/* function showMessage() {
    return 'Hola Mundo'
} */
const AppComponent = ({ cadena, puesto }) => {
    //console.log(props.cadena);
    return (
        <div>
            <span>Bienvenido {cadena}, rol en: {puesto}</span>
        </div>
    )
}

export default AppComponent


