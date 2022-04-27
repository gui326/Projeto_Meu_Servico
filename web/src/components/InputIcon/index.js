import { PatternInput, Area } from "./styled";

export default function InputIcon(props){
    return(
        <Area iconePosicao={props.iconePosicao}>
            {props.icone}
            <PatternInput {...props} fullWidth/>
        </Area>
    )
}