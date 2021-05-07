import styled from 'styled-components';
import { colors } from '../../../db.json';

export const Parent = styled.div`
    display: flex;
`;

export const SidebarPos = styled.div`
        position: absolute;
`;

export const Sidebar = styled.div`
    width: 20%;
    height: 100%;
    position: fixed;
    background-color: ${colors.blue};
    @media screen and (max-width:800px){
        width: 100%;
        height: 5%;
    }
`;

export const Content = styled.div`
    position: absolute;
    margin-left: 20%;
    width: 80%;
    height: 100%;
    overflow-y: auto;
    padding: 0 3%;
    @media screen and (max-width:800px){
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100%;
    }
`;

export const Descricao = styled.section`
    position: relative;
    top: 45%;
    transform: translateY(-50%);
     h2{

        color: #343a40;
        font-size: 46px;
    }
    h2 > span {
        font-size: 46px;
        color: blueviolet;
    }
    h3{
        margin: 15px 0;
        color: #6c757d;
        font-size: 26px;
    }
    h3 > span{
        font-size: 26px;
        color: blueviolet;
    }
    p{
        color:  #6c757d;
        font-size: 18px;
    } 
    @media screen and (max-width:800px){
        margin-top: 10rem;
    }
`;

export const NextIcon = styled.div`
    margin-top: 400%;
    color: ${colors.blue};
`;

export const ImgP1 = styled.img`
    width: 30%;
`;

