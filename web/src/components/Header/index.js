import { Container } from "@mui/material";
import { Area, LogoArea, InfoArea, Fixed } from "./styled";
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deslogar } from "../../store/modules/users/action";


export default function Header(){
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.users);

    const handleLogout = () => {   
        localStorage.removeItem('user');

        dispatch(deslogar());
    }

    return(
        <Area>
            <Fixed>
                <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/home">
                        <LogoArea>
                            <img src="/images/logo.png" alt="Logo Meu Serviço" width="60" height="40"/>          
                        </LogoArea>
                    </Link>

                    <InfoArea>
                        <div>
                            <h3>{userData.name}</h3>
                            <p>Prestador</p>
                        </div>
                        <SettingsIcon />
                        <ExitToAppIcon 
                        onClick={() => handleLogout()}
                        />
                    </InfoArea>
                </Container>
            </Fixed>
        </Area>
    )
}