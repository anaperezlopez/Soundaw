import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarChoice from './SidebarChoice';
import { Playlists, SidebarContainer } from './styles'
import logo from '../../assets/titulosound.png';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src={logo} alt="logo" />
            <SidebarChoice title="Inicio" Icon={HomeIcon }/>
            <SidebarChoice title="Buscar" Icon={SearchIcon} />
            <SidebarChoice title="Tus playlists" Icon={LibraryMusicIcon} />
            <Playlists>PLAYLISTS</Playlists>
            <hr />
            <SidebarChoice title="Internacional"  />
            <SidebarChoice title="Pa' sonreir :)"  />

        </SidebarContainer>
           
        
    )
}

export default Sidebar
