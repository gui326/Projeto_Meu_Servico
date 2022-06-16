import InputIcon from "../../components/InputIcon";
import { Area, Titulo, Descricao, BtnPrimary, BtnSecondary, Card } from "./styled";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import api from "../../services/api";
import { Controller, useForm } from "react-hook-form";
import LoadingFull from "../../components/LoadingFull";
import { logar } from "../../store/modules/users/action";


export default function Login(){
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [loadingFull, setLoadingFull] = useState(false);

    const handleLogin = async (data) => {
        setLoadingFull(true);

        const loginData = {
            email: data.email,
            password: data.password
        }
        
        await api
        .post('/company/login', loginData)
        .then(response => {
            const userData = {
                token: response.data.token,
                name: response.data.name,
                id: response.data.id
            }
            
            localStorage.setItem('user', JSON.stringify(userData));

            dispatch(logar(userData));
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    return(
        <Area>
            <div style={{ marginBottom: 20, textAlign: 'center' }}>
                <img src="/images/logoCor.png" alt="Logo Meu Serviço"/>
            </div>

            <Card>
                <Titulo>Acesso Prestador de Serviço</Titulo>
                <Descricao>Digite os seus dados para poder entrar.</Descricao>

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
                        icone={<MailOutlineIcon />} 
                        sx={{ mt: 3 }} 
                        placeholder="E-mail" 
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
                        sx={{ mt: 3, mb: 2 }} 
                        placeholder="Senha" 
                        variant="filled"/>
                    }
                />

                <BtnPrimary
                onClick={handleSubmit(handleLogin)}
                >
                    Login
                </BtnPrimary>

                <Link to="/cadastro">
                    <BtnSecondary style={{ width: '100%' }}>
                        Cadastrar-se
                    </BtnSecondary>
                </Link>
            </Card>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />
        </Area>
    )
}