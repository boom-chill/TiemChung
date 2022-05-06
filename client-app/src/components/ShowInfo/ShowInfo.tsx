import React from 'react'
import './ShowInfo.scss'

type Props = {
    label: string
    value: any
}

const ShowInfo = (props: Props) => {
    const {label, value} = props
  return (
    <div className='show_info_root'>
        <div className='show_info_label'>
            {label}
        </div>
        <div className='show_info_value'>
            {value}
        </div>
    </div>
  )
}

export default ShowInfo