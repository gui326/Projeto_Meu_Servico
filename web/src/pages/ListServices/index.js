import Header from "../../components/Header";
import { Area, CardArea, Card, Title } from "./styled";

import PlumbingIcon from '@mui/icons-material/Plumbing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingFull from "../../components/LoadingFull";
import api from "../../services/api";
import { useSelector } from "react-redux";


export default function ListServices(){
    const [itemChoose, setItemChoose] = useState('');
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);

    const [services, setServices] = useState([]);

    const getAllServices = async () => {
        setLoadingFull(true);

        await api
        .get(`/company/${userData.id}`, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            setServices(response.data.services);
            console.log('servicos', response);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    useEffect(() => {
        getAllServices();

    }, [])

    return(
        <Area>
            <Header />

            <Container>
                <Title>
                    Listagem de Serviços
                </Title>

                <Grid pb={4} container spacing={2}>
                    {services?.length > 0 && services?.map((item) => (
                        <Grid item md={3}>
                            <Card>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>R$ {item.price}</span>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />
        </Area>
    )
}