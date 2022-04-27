import InputIcon from "../../components/InputIcon";
import { Area, Titulo, Descricao, BtnPrimary, BtnSecondary, Card } from "./styled";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigation = useNavigate();

    return(
        <Area>
            <div style={{ marginBottom: 20, textAlign: 'center' }}>
                <img src="/images/logoCor.png" alt="Logo Meu Serviço"/>
            </div>

            <Card>
                <Titulo>Acesso Prestador de Serviço</Titulo>
                <Descricao>Digite os seus dados para poder entrar.</Descricao>

                <InputIcon iconePosicao=".3em" icone={<MailOutlineIcon />} sx={{ mt: 3 }} placeholder="E-mail" variant="filled"/>

                <InputIcon iconePosicao=".9em" icone={<KeyIcon />} sx={{ mt: 3, mb: 2 }} placeholder="Senha" variant="filled"/>

                <BtnPrimary
                onClick={() => navigation('/home')}
                >
                    Login
                </BtnPrimary>

                <BtnSecondary>
                    Cadastrar-se
                </BtnSecondary>
            </Card>
        </Area>
    )
}