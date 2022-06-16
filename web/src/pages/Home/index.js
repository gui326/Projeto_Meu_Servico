import Header from "../../components/Header";
import { Area, CardArea, Card, CardHidden } from "./styled";

import PlumbingIcon from '@mui/icons-material/Plumbing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { Container } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import DrawerCreateService from "./components/DrawerCreateService";


export default function Home(){
    const [itemChoose, setItemChoose] = useState('');
    const [stateDrawerCreateService, setStateDrawerCreateService] = useState({
        right: false,
    });

    const handleChosse = (choose) => {
        if(choose === itemChoose){
            setItemChoose('');
        } else {
            setItemChoose(choose);
        }
    }

    return(
        <>
            <Area>
                <Header />

                <Container>
                    <CardArea>
                        <Card
                        active={itemChoose === 'servico'}
                        onClick={() => handleChosse('servico')}
                        >
                            <PlumbingIcon />
                            <h3>Serviços</h3>
                        </Card>

                        <Link to="/chats">
                            <Card>
                                <ChatIcon />
                                <h3>Chats</h3>
                            </Card>
                        </Link>

                    </CardArea>

                    <CardArea style={{ marginTop: 20 }}>
                        <Link to="/servicos">
                            <CardHidden active={itemChoose === 'servico'}>
                                <ListAltIcon />
                                <h3>Listar<br/> Serviços</h3>
                            </CardHidden>
                        </Link>

                        <CardHidden 
                        onClick={() => setStateDrawerCreateService({right: true})}
                        active={itemChoose === 'servico'}>
                            <PlumbingIcon />
                            <h3>Cadastrar<br/> Serviço</h3>
                        </CardHidden>
                    </CardArea>
                </Container>
            </Area>

            <DrawerCreateService state={stateDrawerCreateService} setState={setStateDrawerCreateService}/>
        </>
    )
}