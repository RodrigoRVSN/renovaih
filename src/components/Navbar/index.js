import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from '../../db.json';
import './styles.css';
import '../responsividade/styles.css';

const Navbar = styled.nav`
    background: linear-gradient(to right,${colors['dark-blue']},${colors.blue});
    height: 14vh;
    border-radius: 0 0 5px 5px;
`;

export default class Index extends React.Component {
    render() {
        return (
            <>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">

                    <div className="container-fluid" id="menu">
                        <a className="navbar-brand" href="/">Renovaíh</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" exact className="nav-link" >Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projetos" className="nav-link" >Projetos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sobre" className="nav-link" >Sobre</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Navbar>
            </>
        )
    }
}

