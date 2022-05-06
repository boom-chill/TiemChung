import React from 'react'
import './Toolbar.scss'

type Props = {
    title: string,
    children?: any,
}

const Toolbar = (props: Props) => {
    const {title, children} = props
  return (
    <div className='Toolbar_root'>
        <div className='Toolbar_title'>
            {title}
        </div>
        <div className='Toolbar_button'>
            {children}
        </div>
    </div>
  )
}

export default Toolbar