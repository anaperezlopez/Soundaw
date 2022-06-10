import { loginURL } from "../../spotifyLogic"
import { LoginButton, LoginContainer } from "./styles"
import logo from '../../assets/sound-wave.jpg';


const Login = () => {
    
  
    return (
        <LoginContainer>
            <img src={logo} alt="logo"  />
            <LoginButton href={loginURL}>Registrate con spotify</LoginButton> 
        </LoginContainer>
    )
}

export default Login
