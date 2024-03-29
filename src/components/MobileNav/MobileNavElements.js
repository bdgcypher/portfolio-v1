import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const MobileNavContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #161314;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #E22866;

    &:hover {
        color: #fff;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const MobileNavWrapper = styled.div`
    color: #fff;
`;

export const MobileNavMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const MobileNavLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #6C233B;
        border-left: 4px solid #E22866;
        transition: color 0.2s ease-in-out;
    }
`;

export const MobileNavBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileNavRoute = styled(LinkR)`
border-radius: 50px;
background: #E22866 ;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 20px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #E22866;
    background: #F6F8FF;
}
`;




