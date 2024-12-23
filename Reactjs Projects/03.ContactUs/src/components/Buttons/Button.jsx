import style from './Button.module.css'


const Button = (props) => {
  return (
    
        <button  onClick={props.btn} className={ props.isOutline ? style.second_button : style.main_button}>
            {props.icon} 
            {props.text}
        </button>
    
  )
}

export default Button