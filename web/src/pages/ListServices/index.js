import Header from "../../components/Header";
import { Area, Card, Title, AreaActions } from "./styled";


import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Grid, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingFull from "../../components/LoadingFull";
import api from "../../services/api";
import { useSelector } from "react-redux";
import DrawerEditService from "./components/DrawerEditService";
import { Masonry } from "@mui/lab";


export default function ListServices(){
    const [itemChoose, setItemChoose] = useState('');
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);
    const [openDrawerEditService, setOpenDrawerEditService] = useState({
        right: false
    });
    const [serviceEdit, setServiceEdit] = useState({});

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

    const apiDeleteService = async (id) => {
        setLoadingFull(true);

        await api
        .delete(`/service/${id}`, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            getAllServices();
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
        <>
            <Area>
                <Header />

                <Container>
                    <Title>
                        Listagem de Serviços
                    </Title>

                    <Masonry columns={4} spacing={2}>
                        {services?.length > 0 && services?.map((item) => (
                            <Card>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>R$ {item.price}</span>

                                <AreaActions>
                                    <Tooltip
                                    onClick={() => {
                                            setServiceEdit(item);
                                            setOpenDrawerEditService({right: true})
                                        }
                                    }
                                    title="Editar serviço">
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip 
                                    onClick={() => apiDeleteService(item.id)}
                                    title="Deletar serviço">
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </AreaActions>
                            </Card>
                        ))}
                    </Masonry>

                    {services?.length === 0 &&
                        <div style={{ textAlign: 'center' }}>
                            <h5 style={{ color: '#FFFFFF', fontSize: 22 }}>Não foi encontrado nenhum serviço</h5>
                        </div>
                    }

                </Container>

                <LoadingFull open={loadingFull} setOpen={setLoadingFull} />
            </Area>

            <DrawerEditService state={openDrawerEditService} setState={setOpenDrawerEditService}
            service={serviceEdit}
            getServices={getAllServices}
            />
        </>
    )
}