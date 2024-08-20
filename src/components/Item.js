import { PropTypes } from "prop-types";

function Item({marca, ano_lancamento}) {
    return(
        <>
            <li><h2>{marca}</h2> - {ano_lancamento}</li>
            <h2>opa</h2>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca filha da puta',
    ano_lancamento: 0,
}

export default Item