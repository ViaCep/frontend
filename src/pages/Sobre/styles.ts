import styled, { keyframes } from 'styled-components'

const AnimatedFace = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    },
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ContainerTitulo = styled.div`
    width: 80%;
`
export const ContainerDescription = styled.div`
    width: 80%;
`
export const Titulo = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #000000cc;
    line-height: 37px;
    animation: ${AnimatedFace} .6s ease 1;

    span {
        color: #FF3D00;
    }
`
export const Description = styled.p`
    font-size: 17px;
    animation: ${AnimatedFace} .6s ease 1;
`