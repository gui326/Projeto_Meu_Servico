import InputIcon from "../../components/InputIcon";
import { Area, Titulo, Descricao, BtnPrimary, BtnSecondary, Card } from "./styled";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Controller, useForm } from "react-hook-form";
import LoadingFull from "../../components/LoadingFull";
import PersonIcon from '@mui/icons-material/Person';
import { MenuItem, Select } from "@mui/material";


export default function Register(){
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [loadingFull, setLoadingFull] = useState(false);

    const [categories, setCategories] = useState([]);

    const [registerComplet, setRegisterComplet] = useState(false);

    const handleRegister = async (data) => {
        setLoadingFull(true);

        const registerData = {
            email: data.email,
            name: data.name,
            password: data.password,
            CategoryId: data.category
        }
        
        await api
        .post('/company/register', registerData)
        .then(response => {
            reset();
            setRegisterComplet(true);
            console.log(response);
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
        getAllCategory();

    }, [])
    

    return(
        <Area>
            {!registerComplet ?
                <>
                    <div style={{ marginBottom: 20, textAlign: 'center' }}>
                        <img src="/images/logoCor.png" alt="Logo Meu Serviço"/>
                    </div>

                    <Card>
                        <Titulo>Registro Prestador de Serviço</Titulo>
                        <Descricao>Preencha os seus dados para criar uma conta.</Descricao>

                        <form onSubmit={handleSubmit(handleRegister)}>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, ref }) => 
                                    <InputIcon 
                                    {...field}
                                    ref={ref}
                                    error={errors.name}
                                    iconePosicao=".3em" 
                                    icone={<PersonIcon />} 
                                    sx={{ mt: 3 }} 
                                    placeholder="Digite o seu nome" 
                                    variant="filled"/>
                                }
                            />

                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, ref }) => 
                                    <InputIcon 
                                    {...field}
                                    ref={ref}
                                    error={errors.email}
                                    iconePosicao=".3em" 
                                    type="email"
                                    icone={<MailOutlineIcon />} 
                                    sx={{ mt: 2 }} 
                                    placeholder="Digite seu email" 
                                    variant="filled"/>
                                }
                            />

                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: true }}
                                render={({ field, ref }) => 
                                    <InputIcon 
                                    {...field}
                                    ref={ref}
                                    error={errors.password}
                                    iconePosicao=".9em" 
                                    type="password"
                                    icone={<KeyIcon />} 
                                    sx={{ mt: 2, mb: 2 }} 
                                    placeholder="Digite sua senha" 
                                    variant="filled"/>
                                }
                            />

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
                                    variant="filled"
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

                            <BtnPrimary
                            type="submit"
                            style={{ width: '100%' }}>
                                Cadastrar-se
                            </BtnPrimary>

                            <Link to="/">
                                <BtnSecondary 
                                type="button"
                                style={{ width: '100%' }}>
                                    Voltar
                                </BtnSecondary>
                            </Link>
                        </form>
                    </Card>
                </>
                :
                <>
                    <img 
                    style={{ width: 'auto', height: '450px' }}
                    src="/images/ok.png" alt="Desenho Mulher Ok"/>
                    <h1
                    style={{ margin: 0 }}
                    >
                        Seu cadastro foi realizado com sucesso!
                    </h1>
                    <p
                    style={{ margin: 0, paddingTop: '.5em', paddingBottom: '1em' }}
                    >Entre para ter acesso a sua conta</p>

                    <Link to="/">
                        <BtnPrimary
                        type="submit"
                        style={{ width: '150px' }}>
                            Entrar
                        </BtnPrimary>
                    </Link>
                </>
            }

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />
        </Area>
    )
}