import React from 'react'
import './ButtomCustom.scss'

type Props = {
  lable: string,
  color?: string,
  style?: object,
  onClick(): any,
}

const ButtonCustom = (props: Props) => {
  const { lable, color, onClick, style } = props
  let colorNew = color || '#4F2BDD'

  if(color == 'blue') {
    colorNew = '#4F2BDD'
  }
  if(color == 'red') {
    colorNew = '#F72585'
  }
  if(color == 'green') {
    colorNew = '#39D05C'
  }

  return (
    <button className='button_root' onClick={onClick} style={{backgroundColor: colorNew, ...style}}>  
      { lable }
    </button>
  )
}

export default ButtonCustom