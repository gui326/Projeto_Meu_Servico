import { ButtonCustom } from "./styled";

export default function Button(props){
    return(
        <ButtonCustom {...props} variant="contained">
            {props.children}
        </ButtonCustom>
    )
}