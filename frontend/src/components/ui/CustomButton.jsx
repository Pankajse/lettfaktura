import './../../styles/CustomButton.css'

const CustomButton = ({text,onClick,type,variant,children}) => {
  return (
    <button id='custom-button' className={variant} type={type} onClick={onClick}>{text}{children}</button>
  )
}

export default CustomButton