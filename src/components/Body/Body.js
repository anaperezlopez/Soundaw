
import Header from './Header'
import { BodyContainer, Icons, Info, InfoText, Songs } from './styles'
import { useSelector } from "react-redux"
import { selectPlaylist } from "../../features/PlaylistSlice"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from './SongRow'

const Body = () => {
    const playlist = useSelector(selectPlaylist);
    console.log("playlist =>", playlist)
    return (
        <BodyContainer>  
            <Header />
            <Info>
                <img src={playlist?.images[0]?.url} alt="" />
                <InfoText>
                    <h4>PLAYLIST</h4>
                    <h2>Discover Weekly</h2>
                    <p>{playlist?.name }</p>
                </InfoText>
            </Info>
            <Songs>
                <Icons>
                    <PlayCircleFilledIcon className="playButton"/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon fontSize="large"/>
                </Icons>
                {

                    playlist?.tracks?.items.map((item, index) => (
                        <SongRow track={item.track} key={ index}/>
                  ))
                }
            </Songs>
        </BodyContainer>
    )
}

export default Body
