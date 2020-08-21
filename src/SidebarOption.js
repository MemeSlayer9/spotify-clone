import React from 'react'
import './SidebarOption.css';
function Sidebaroption( {title, Icon}) {
    return (
        <div className='sidebaroption'>
            {Icon && <Icon className='sidebaroption-icon'></Icon>}
            {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default Sidebaroption
