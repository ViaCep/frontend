import styled, { keyframes } from 'styled-components'

const AnimateFade = keyframes`
    from{
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    background: #f8f8f8;
    padding: 35px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    animation: ${AnimateFade} .6s ease 1;
`;