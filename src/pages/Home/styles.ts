import styled, { keyframes } from 'styled-components'
import Background from '../../assets/street.jpg'


const AnimatedFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    },
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div``;

export const Search = styled.div`
    height: 100vh;
    background-color: #f8f8f8;
`;

export const Details = styled.div`
    height: 100vh;
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Row = styled.div``;

export const ContainerCep = styled.div`
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerTitulo = styled.div`
    width: 80%;
`;

export const Titulo = styled.p`
    font-size: 40px;
    font-weight: bold;
    line-height: 40px;
    color: #000000cc;
    animation: ${AnimatedFade} .6s ease 1;
`;

export const Lengend = styled.p`
    animation: ${AnimatedFade} .6s ease 1;
`;

export const ContainerInputSearch = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const InputSearch = styled.input`
    border: 0;
    outline: none;
    width: 100%;
    box-shadow: 0 2px 9px #00000033;
    padding: 10px 30px;
    border-radius: 30px;
    margin-top: 20px;
    color: #3d3d3d;
    animation: ${AnimatedFade} .6s ease 1;

    ::placeholder {
        color: #00000044;
    }
`;

export const ButtonSubmit = styled.button`
    position: absolute;
    right: 5px;
    top: 40%;
    border: 0;
    background-color: #FF3D00;
    padding: 5px 10px;
    border-radius: 100%;
    color: #f8f8f8;
    animation: ${AnimatedFade} .6s ease 1;
`;