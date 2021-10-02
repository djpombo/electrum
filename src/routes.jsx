import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
