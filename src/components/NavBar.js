import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { theme } from '../styles/colors';


const NavBar = () => {

    return (
        <Navigation>
            <NavLink to='/'>
                <Brand><i className="fas fa-cloud-sun" />{" "}WeatherApp</Brand>
            </NavLink>
            <div>
                <NavLink to='/' ><i className="fas fa-search-location" /></NavLink>
                <NavLink to='/favorites'> <i className="fas fa-star" /></NavLink>
            </div>
        </Navigation>
    )
}

export default NavBar;

const Navigation = styled.nav`
width:100%;
padding: 1.5rem 3.5rem;
background-color:transparent;
color: ${theme.textColor};
margin: 2.5rem 0;


display:flex;
align-items: center;
justify-content:space-between;
`;

const Brand = styled.div`
font-size: 1.8rem;

& i{
font-size:2.2rem;
}
`;

const NavLink = styled(Link)`
text-decoration:none;

&:not(:last-child){
    margin-right: 1.2rem;
}

&:active {
    color:inherit;
}

&:visited {
    color:inherit;
}
`;
