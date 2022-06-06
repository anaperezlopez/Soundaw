import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"
import {selectUser}from "../../features/UserSlice"



const Header = () => {
    const user = useSelector(selectUser)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs, or other"/>
            </HeaderLeft>
            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt={user?.id }/>
                <h4>{ user?.id}</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
