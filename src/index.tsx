/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router, RouterProps } from "@solidjs/router";

import './index.css';
import Login from "./pages/Login";
import Header from './components/Header';
import Home from './pages/Home';
import { isSignedIn, setSignedIn } from './stores/user';
import Footer from './components/Footer';

export function App(props: RouterProps) {

    async function handleSignOut() {
        window.localStorage.removeItem("isSignedIn");
        setSignedIn(false)
    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <Header/>
            {isSignedIn() && <button onClick={handleSignOut}>Sign Out</button>}
            {props.children}
            <Footer/>
        </>
    )
}
  
const root = document.getElementById('root')

render(
    () => <Router root={App}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </Router>, 
    root!
)
