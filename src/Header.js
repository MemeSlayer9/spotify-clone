import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from './Datalayer';


function Header() {

    const[{user}, dispatch] = useDataLayerValue();
    return (
        <div className='header'>
        <div className='header-left'>
            <SearchIcon/> <input placeholder='Search for Artist, Song' type='text '/>
        </div>
        <div className='header-right'>
            </div>
            <Avatar alt={user?.display_name} src={user?.images[0].url} />
    <h4>{user?.display_name}</h4>
        </div>
    )
}

export default Header
