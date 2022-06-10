import styled from "styled-components";

const SidebarContainer = styled.div`
 flex: 0.2;
 height: 100vh;
 background-color: #050520;
 min-width: 240px;
 color: #fff;
 & img{
     height: 70px;
     padding: 10px;
     margin-right: auto;
    
 }
 & hr {
     border: 1px solid;
     width: 90%;
     margin: 10px auto;
     color: #78A1FF;
 }
`

const Playlists = styled.div`
 margin: 15px 10px;
 color: #78A1FF;
 font-weight: bolder;

`

const Choices = styled.div`
margin-left: 10px;
display: flex;
align-items: center;
color: gray;
height: 40px;
cursor: pointer;
transition: 300ms color ease-in;
&:hover {
    color: #fff;
}


`




export { SidebarContainer, Playlists, Choices}