import PropTypes from "prop-types";

const PropTypess = ({ value }) => {
    return (
        <>
            <h1>PropTypess</h1>
            <h2>{value}</h2>
        </>

    )
}
export default PropTypess

PropTypess.propTypes = {
    value: PropTypes.number.isRequired
}