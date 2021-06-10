import PropTypes from 'prop-types'

const Button = ({color, text , onClick}) =>{


    return(
        <button onClick={onClick} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onclick: PropTypes.func,
}
export default Button
