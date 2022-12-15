/* function showMessage() {
    return 'Hola Mundo'
} */
const AppComponent = (props) => {
    console.log(props.cadena);
    return (
        <div>
            <span>{props.cadena}</span>
        </div>
    )
}

export default AppComponent


