import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
        value={value}
        onChange = {event=> onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(o=>
            <option value={o.value} key={o.value}>{o.name}</option>
        )}
    </select>
  )
}

export default MySelect