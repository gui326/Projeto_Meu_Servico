import { TextField } from "@mui/material";
import { Area, Titulo, Descricao, BtnPrimary, BtnSecondary, Card } from "./styled";

export default function Login(){
    return(
        <Area>
            <Card>
                <div style={{ textAlign: 'center' }}>
                    <img src="/images/logoCor.png" alt="Logo Meu Serviço" width="120" height="70"/>
                </div>

                <Titulo>Acesso Prestador de Serviço</Titulo>
                <Descricao>Digite os seus dados<br/> para poder entrar.</Descricao>

                <TextField sx={{ mt: 2 }} placeholder="E-mail" variant="standard"/>

                <TextField sx={{ mt: 4, mb: 2 }} placeholder="Senha" variant="standard"/>

                <BtnPrimary>
                    Login
                </BtnPrimary>

                <BtnSecondary>
                    Cadastra-se
                </BtnSecondary>
            </Card>
        </Area>
    )
}