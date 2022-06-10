import styled from "styled-components"

const LoginContainer = styled.div`
 display: grid;
 place-items: center;
 height: 100vh;
 background-color: #000;
 & img {
     width: 100%;
     height: 90vh;
 }
`

const LoginButton = styled.a`
 padding: 20px;
 background-color: #5D85DF;
 border-radius: 90px;
 color: #fff;
 text-decoration:none;
 text-transform:uppercase;
 font-weight: bolder;

`

export {LoginContainer, LoginButton}

