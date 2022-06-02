import { TituloStyled, Subtitulo } from "./Titulo.style";

interface TituloProps{
    titulo: string;
    subtitulo?: string | JSX.Element; // "?" diz que a propriedade é opcional
}

export default function Titulo(props: TituloProps){
    return (
        <div>
            <TituloStyled>{props.titulo}</TituloStyled>
            <Subtitulo>{props.subtitulo}</Subtitulo>
        </div>
    )    
}
