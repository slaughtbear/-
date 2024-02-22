import PropTypes from 'prop-types';

function Boton({usuario}){
    return <button onClick={function(){
        console.log("Hola Mundo")
    }}>
        {usuario}
    </button>
}

Boton.propTypes = {
    usuario: PropTypes.string.isRequired
}

Boton.defaultProps = {
    usuario: "User"
}


export default Boton