import Drawer from "../../../../components/Drawer";
import { HeaderDrawer, Message, MessagesArea } from "./styled";
import { Divider, IconButton } from "@mui/material";
import Button from "../../../../components/Button";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../../../../components/Input";
import { Controller, useForm } from "react-hook-form";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingFull from "../../../../components/LoadingFull";
import ChatIcon from '@mui/icons-material/Chat';


export default function DrawerChat({state, setState, idChat}){
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const [loadingFull, setLoadingFull] = useState(false);
    const userData = useSelector(state => state.users);

    const [messages, setMessages] = useState([]);

    const apiGetMessages = async (data) => {
        setLoadingFull(true);

        await api
        .get(`/chat/${idChat}`, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            setMessages(response.data.messages);
            console.log('messages', response);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoadingFull(false);
        })
    }

    const apiSendMessage = async (data) => {
        const newMessage = {
            content: data.message,
            isCompany: true
        }
        
        await api
        .post(`/chat/${idChat}`, newMessage, {headers: { Authorization: `Bearer ${userData.token}` }})
        .then(response => {
            console.log(response);
            apiGetMessages();
            reset();
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if(idChat){
            apiGetMessages();
        }

    }, [idChat])
    

    return(
        <>
            <Drawer state={state} setState={setState}>
                <HeaderDrawer>
                    <div>
                        <ChatIcon />
                        <h4>Chat</h4>
                    </div>

                    <IconButton
                    onClick={() => setState({right: false})}
                    >
                        <CloseIcon />
                    </IconButton>
                </HeaderDrawer>

                <Divider sx={{ my: 2 }} />


                <MessagesArea>
                    {messages?.length > 0 && messages?.map((item) => (
                        <Message key={item.id} isCompany={item.isCompany}><span>{item.content}</span></Message>
                    ))}
                </MessagesArea>


                <Divider sx={{ my: 2 }} />

                <form onSubmit={handleSubmit(apiSendMessage)} 
                style={{ display: 'flex', gap: '50px', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Controller
                        name="message"
                        control={control}
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field, ref }) => 
                            <Input
                            {...field}
                            error={errors.message}
                            ref={ref}
                            placeholder="Digite a menssagem"
                            />
                        }
                    />

                    <Button
                    type="submit"
                    >
                        Enviar
                    </Button>
                </form>

            </Drawer>

            <LoadingFull open={loadingFull} setOpen={setLoadingFull} />

        </>
    )
}