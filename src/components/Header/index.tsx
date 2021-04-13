import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, Imagem, Links } from './styles';
import Logo from '../../assets/logo.png'

const Header: React.FC = () => {
    return(
        <Nav className="d-flex justify-content-between align-items-center">
            <Imagem src={Logo} />
            <Links>
                <NavLink to="/" activeClassName="active" exact={true}>Pesquisar</NavLink>
                <NavLink to="/sobre" activeClassName="active">Sobre</NavLink>
            </Links>
        </Nav>
    );
}

export default Header;