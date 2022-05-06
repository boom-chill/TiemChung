import React from 'react'
import './ButtonSecond.scss'

type Props = {
  label: string,
  color?: string,
  background?: string,
  style?: object,
  onClick(): any,
}

const ButtonSecond = (props: Props) => {
  const { label, color, background, style, onClick } = props
  let colorNew = color || '#46309B'
  let backgroundNew = background || '#F5EBFD'

  if(color == 'blue') {
    colorNew = '#46309B'
    backgroundNew = '#F5EBFD'
  }
  if(color == 'red') {
    colorNew = '#F72585'
    backgroundNew = '#FFEBF4'
  }
  if(color == 'green') {
    colorNew = '#12852D'
    backgroundNew = '#CFF6D9'
  }

  return (
    <button className='button_second_root' onClick={onClick} style={{backgroundColor: backgroundNew, color: colorNew, ...style}}>  
      { label }
    </button>
  )
}

export default ButtonSecond