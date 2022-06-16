import Drawer from "../../../../components/Drawer";
import { HeaderDrawer } from "./styled";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Divider, Grid, IconButton } from "@mui/material";
import Button from "../../../../components/Button";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";
import { Controller, useForm } from "react-hook-form";
import api from "../../../../services/api";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingFull from "../../../../components/LoadingFull";
import CloseIcon from '@mui/icons-material/Close';


export default function DrawerCreateService({state, setState}){
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);

    const apiCreateService = async (data) => {
        setLoadingFull(true);

        const newService = {
            CompanyId: userData.id,
            name: data.name,
            price: data.price,
            description: data.description
        }

        await api
        .post('/service', newService, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            console.log(response);
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

    return(
        <>
            <Drawer state={state} setState={setState}>
                <HeaderDrawer>
                    <div>
                        <AddCircleOutlineIcon />
                        <h4>Criando Serviço</h4>
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
                onClick={handleSubmit(apiCreateService)}
                >
                    Criar Serviço
                </Button>

            </Drawer>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />

        </>
    )
}