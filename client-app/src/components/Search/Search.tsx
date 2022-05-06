import React from 'react'

type Props = {
    onChange(): any,
    placeholder: string,
}

const Search = (props: Props) => {
    const { onChange, placeholder } = props
  return (
    <input type="text" className='search_root' placeholder={placeholder} onChange={onChange}/>
  )
}

export default Search