import { useState } from "react";

import AppRoutes from "./approutes";
import AuthRoutes from "./authroutes";


export default function Routes(){
    const [user, setUser] = useState(null);

    return(
        user ? <AppRoutes /> : <AuthRoutes />
    );
}