import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from './pages/views/Inicio';
import Projetos from './pages/views/Guia';
import Sobre from './pages/views/Sobre';
import Energias from './pages/views/Energias';
import Sustentabilidade from './pages/views/Sustentabilidade';

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/projetos" component={Projetos} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/energias" component={Energias} />
                <Route path="/sustentabilidade" component={Sustentabilidade} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};