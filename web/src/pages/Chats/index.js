import Header from "../../components/Header";
import { Area, CardArea, Card, Title } from "./styled";

import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingFull from "../../components/LoadingFull";
import api from "../../services/api";
import { useSelector } from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';
import DrawerChat from "./components/DrawerChat";


export default function Chats(){
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);
    const [idChat, setIdChat] = useState("");

    const [stateDrawerChat, setStateDrawerChat] = useState({
        right: false,
    });

    const [chats, setChats] = useState([]);

    const getAllChats = async () => {
        setLoadingFull(true);

        await api
        .get(`/chat/company/${userData.id}`, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            setChats(response.data);
            console.log('chats', response);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    useEffect(() => {
        getAllChats();

    }, [])

    return(
        <>
            <Area>
                <Header />

                <Container>
                    <Title>
                        Listagem de Chats
                    </Title>

                    <Grid pb={4} container spacing={2}>
                        {chats?.length > 0 && chats?.map((item) => (
                            <Grid key={item.id} item md={3}>
                                <Card
                                onClick={() => {
                                    setStateDrawerChat({right: true});
                                    setIdChat(item.id);
                                }}
                                >
                                    <div>
                                        <p>#{item.Order.id}</p>
                                        <CircleIcon />
                                        <p>{item.Order.Client.name}</p>
                                    </div>

                                    <h3>- {item.Order.Service.name}</h3>

                                    <h6>{item.status}</h6>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <LoadingFull open={loadingFull} setOpen={setLoadingFull} />
            </Area>

            <DrawerChat state={stateDrawerChat} setState={setStateDrawerChat} idChat={idChat}/>
        </>
    )
}