import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Promocoes from './components/Promocoes';
import Novidades from './components/Novidades';
import Notebooks from './components/Notebooks';
import Smartphones from './components/Smartphones';
import Acessorios from './components/Acessorios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/promocoes' component={Promocoes} />
                <Route exact path='/novidades' component={Novidades} />
                <Route exact path='/notebooks' component={Notebooks} />
                <Route exact path='/smartphones' component={Smartphones} />
                <Route exact path='/acessorios' component={Acessorios} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
