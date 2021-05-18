import React from 'react'
import { 
    Container,
    ButtonType
} from './styles'

interface IParams {
    url: String;
    text: String;
}

const Button: React.FC <IParams> = ({ url, text, ...rest}) => {
    return(
        <Container>
            <ButtonType
                onClick={() => window.location.href=`https://www.google.com.br/maps/search/${url}`}
                {...rest}
            >
                <i className="fas fa-map-marker-alt me-2"></i>
                {text}
            </ButtonType>
        </Container>
    );
}

export default Button;