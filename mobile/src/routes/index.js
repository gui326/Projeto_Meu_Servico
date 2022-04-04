import { useState } from "react";
import { useSelector } from "react-redux";

import AppRoutes from "./approutes";
import AuthRoutes from "./authroutes";


export default function Routes(){
    const user = useSelector(state => state.users);

    return(
        user ? <AppRoutes /> : <AuthRoutes />
    );
}