import Header from "../../components/Header";
import { Area, CardArea, Card } from "./styled";

import PlumbingIcon from '@mui/icons-material/Plumbing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { Container } from "@mui/material";


export default function Home(){
    return(
        <Area>
            <Header />

            <Container>
                <CardArea>
                    <Card>
                        <PlumbingIcon />
                        <h3>Cadastrar<br/>Serviço</h3>
                    </Card>

                    <Card>
                        <ListAltIcon />
                        <h3>Serviços<br/>Realizados</h3>
                    </Card>

                    <Card>
                        <ChatIcon />
                        <h3>Chat</h3>
                    </Card>
                </CardArea>
            </Container>
        </Area>
    )
}