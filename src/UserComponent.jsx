import PropTypes from 'prop-types';

const UserComponent = ({ nombre }) => {
    return (
        <h1>Bienvenido {nombre}</h1>
    )
}
export default UserComponent

UserComponent.propTypes = {
    nombre: PropTypes.string.isRequired
}