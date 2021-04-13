import styled from 'styled-components'

export const Nav = styled.div``;

export const Imagem = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
`;

export const Links = styled.div`
    display: flex;

    a {
        margin-right: 15px;
        color: #3c3c3c;
        font-weight: bold;
    }
    .active {
        color: #FF3D00;
    }
`;