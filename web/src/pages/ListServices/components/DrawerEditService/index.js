import Drawer from "../../../../components/Drawer";
import { HeaderDrawer } from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Grid, IconButton } from "@mui/material";
import Button from "../../../../components/Button";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";
import { Controller, useForm } from "react-hook-form";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingFull from "../../../../components/LoadingFull";
import CloseIcon from '@mui/icons-material/Close';


export default function DrawerEditService({state, setState, service, getServices}){
    const { handleSubmit, control, setValue, reset, formState: { errors } } = useForm();
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);

    const apiEditService = async (data) => {
        setLoadingFull(true);

        const newService = {
            name: data.name,
            price: data.price,
            description: data.description
        }

        await api
        .put(`/service/${service.id}`, newService, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            getServices();
            reset();
            setState({ right: false })
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    useEffect(() => {
        setValue('name', service?.name);
        setValue('price', service?.price);
        setValue('description', service?.description);

    }, [service]);
    

    return(
        <>
            <Drawer state={state} setState={setState}>
                <HeaderDrawer>
                    <div>
                        <EditIcon />
                        <h4>Editando Serviço</h4>
                    </div>

                    <IconButton
                    onClick={() => setState({right: false})}
                    >
                        <CloseIcon />
                    </IconButton>
                </HeaderDrawer>

                <Divider sx={{ my: 2 }} />

                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Label>Nome</Label>

                        <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.name}
                            ref={ref}
                            placeholder="Digite o nome"
                            />
                        }
                        />

                    </Grid>
                    <Grid item md={6}>
                        <Label>Preço</Label>

                        <Controller
                        name="price"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.price}
                            ref={ref}
                            placeholder="Digite o preço"
                            />
                        }
                        />

                    </Grid>
                </Grid>

                <Grid mt={0} container spacing={2}>
                    <Grid item md={12}>
                        <Label>Descrição</Label>

                        <Controller
                        name="description"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.description}
                            ref={ref}
                            placeholder="Digite a descrição"
                            />
                        }
                        />

                    </Grid>
                </Grid>


                <Divider sx={{ my: 2 }} />

                <Button
                onClick={handleSubmit(apiEditService)}
                >
                    Alterar Serviço
                </Button>

            </Drawer>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />

        </>
    )
}