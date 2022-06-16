import Drawer from "../../../../components/Drawer";
import { HeaderDrawer } from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Grid, IconButton, MenuItem, Select } from "@mui/material";
import Button from "../../../../components/Button";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";
import { Controller, useForm } from "react-hook-form";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingFull from "../../../../components/LoadingFull";
import CloseIcon from '@mui/icons-material/Close';
import FaceIcon from '@mui/icons-material/Face';


export default function DrawerProfile({state, setState}){
    const { handleSubmit, control, setValue, reset, formState: { errors } } = useForm();
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);

    const [categories, setCategories] = useState([]);

    const [profile, setProfile] = useState({});

    const apiGetProfile = async () => {
        setLoadingFull(true);

        await api
        .get(`/company/${userData.id}`, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            setProfile(response.data.company);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    const apiUpdateProfile = async (data) => {
        setLoadingFull(true);
        
        const updateProfile = {
            name: data.name,
            email: data.email,
            resume: data.resume,
            CategoryId: data.category,
            image: data.image,
            description: data.description
        }

        await api
        .put(`/company/${userData.id}`, updateProfile, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            reset();
            setState({right: false});
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })

    }

    const getAllCategory = async () => {
        setLoadingFull(true);
        
        await api
        .get('/category')
        .then(response => {
            setCategories(response.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    useEffect(() => {
        apiGetProfile();
        getAllCategory();

    }, [state])

    useEffect(() => {
        setValue('name', profile.name);
        setValue('email', profile.email);
        setValue('resume', profile.resume);
        setValue('category', profile.CategoryId);
        setValue('image', profile.image);
        setValue('description', profile.description);

    }, [state]);
    
    return(
        <>
            <Drawer state={state} setState={setState}>
                <HeaderDrawer>
                    <div>
                        <FaceIcon />
                        <h4>Perfil</h4>
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
                        <Label>Email</Label>

                        <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.price}
                            type="email"
                            ref={ref}
                            placeholder="Digite o email"
                            />
                        }
                        />

                    </Grid>
                </Grid>

                <Grid mt={0} container spacing={2}>
                    <Grid item md={7}>
                        <Label>Resumo</Label>

                        <Controller
                        name="resume"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.resume}
                            ref={ref}
                            placeholder="Digite o resumo"
                            />
                        }
                        />

                    </Grid>
                    <Grid item md={5}>
                        <Label>Categoria</Label>

                        <Controller
                            name="category"
                            control={control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field, ref }) => 
                                <Select
                                {...field}
                                ref={ref}
                                fullWidth
                                error={errors.category}
                                displayEmpty
                                sx={{ color: 'grey' }}
                                variant="outlined"
                                >
                                    <MenuItem value="">
                                        <em style={{ color: '#989898' }}>Selecione a categoria</em>
                                    </MenuItem>
                                    {categories?.length > 0 && categories?.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            }
                        />

                    </Grid>
                </Grid>

                <Grid mt={0} container spacing={2}>
                    <Grid item md={12}>
                        <Label>Link imagem</Label>

                        <Controller
                        name="image"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.image}
                            ref={ref}
                            placeholder="Digite a url da imagem"
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
                onClick={handleSubmit(apiUpdateProfile)}
                >
                    Atualizar Perfil
                </Button>

            </Drawer>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />

        </>
    )
}