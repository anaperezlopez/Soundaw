import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarChoice from './SidebarChoice';
import { Playlists, SidebarContainer } from './styles'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
            <SidebarChoice title="Home" Icon={HomeIcon }/>
            <SidebarChoice title="Search" Icon={SearchIcon} />
            <SidebarChoice title="Your Library" Icon={LibraryMusicIcon} />
            <Playlists>PLAYLISTS</Playlists>
            <hr />
            <SidebarChoice title="2021 Chillout Music"  />
            <SidebarChoice title="Dark Metal"  />|

        </SidebarContainer>
           
        
    )
}

export default Sidebar
