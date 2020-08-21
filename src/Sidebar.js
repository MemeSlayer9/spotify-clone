import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import LibraryMusicIcon  from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from './Datalayer';



function Sidebar() {
    const [{ playlists}, dispatch] =useDataLayerValue();
    return (
        <div className='sidebar'>
            <img  className='sidebar-logo' 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
 
            <SidebarOption Icon={HomeIcon} title='Home'/>
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryMusicIcon} title='Library'/>
            <br/>
            <strong className='sidebar-title'>PLAYLIST</strong>
            
            {playlists?.items?.map((playlist) =>(
            <SidebarOption  title={playlist.name}/> ))}
          
            <hr/>
        </div>
    )
}

export default Sidebar
