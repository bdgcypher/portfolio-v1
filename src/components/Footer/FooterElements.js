import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #0B090A;
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterItemTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLinkS = styled(LinkS)`
    color: #AEADAE;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #E22866;
        transition: 0.3s ease-out;
    }
`;

export const FooterLinkR = styled(LinkR)`
    color: #AEADAE;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #E22866;
        transition: 0.3s ease-out;
    }
`;

export const FooterA = styled.a`
    color: #AEADAE;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #E22866;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #E22866;
        transition: 0.3s ease-out;
    }
`;

export const WebesiteRights = styled.small`
    color: #AEADAE;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    cursor: pointer;

    &:hover {
        color: #E22866;
        transition: 0.3s ease-out;
    }
`;