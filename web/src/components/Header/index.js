import { Container, IconButton } from "@mui/material";
import { Area, LogoArea, InfoArea, Fixed } from "./styled";
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deslogar } from "../../store/modules/users/action";
import DrawerProfile from "./components/DrawerProfile";
import { useState } from "react";


export default function Header(){
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.users);
    const [openDrawerProfile, setOpenDrawerProfile] = useState({
        right: false
    });

    const handleLogout = () => {   
        localStorage.removeItem('user');

        dispatch(deslogar());
    }

    return(
        <>
            <Area>
                <Fixed>
                    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Link to="/home">
                            <LogoArea>
                                <img src="/images/logo.png" alt="Logo Meu Serviço" width="60" height="40"/>          
                            </LogoArea>
                        </Link>

                        <InfoArea>
                            <div style={{ marginRight: 15 }}>
                                <h3>{userData.name}</h3>
                                <p>Prestador</p>
                            </div>

                            <IconButton
                            onClick={() => setOpenDrawerProfile({right: true})}
                            >
                                <FaceIcon />
                            </IconButton>

                            <IconButton
                            onClick={() => handleLogout()}
                            >
                                <ExitToAppIcon />
                            </IconButton>
                        </InfoArea>
                    </Container>
                </Fixed>
            </Area>

            <DrawerProfile state={openDrawerProfile} setState={setOpenDrawerProfile}/>
        </>
    )
}