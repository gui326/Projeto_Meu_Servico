import { Container } from "@mui/material";
import { Area, LogoArea, InfoArea, Fixed } from "./styled";
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";


export default function Header(){
    const navigation = useNavigate();

    return(
        <Area>
            <Fixed>
                <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <LogoArea>
                        <img src="/images/logo.png" alt="Logo Meu Serviço" width="60" height="40"/>    
                        <h4>Area Prestador de Serviço</h4>            
                    </LogoArea>
                    <InfoArea>
                        <div>
                            <h3>Fulano da Silva</h3>
                            <p>R$ 1.200,00</p>
                        </div>
                        <SettingsIcon />
                        <ExitToAppIcon 
                        onClick={() => navigation('/')}
                        />
                    </InfoArea>
                </Container>
            </Fixed>
        </Area>
    )
}