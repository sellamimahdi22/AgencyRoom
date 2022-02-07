import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './conponment/nav/Nav';
import Decouvrir from'./conponment/decouvrir/Decouvrir'
import Identifier from './conponment/register/Identifier' 
import Inscrire from './conponment/register/Inscrire.' 
import Accueil from './conponment/Accueil/Accueil'
import Chambreslist from'./conponment/chambres/Chambreslist'
import Contact from'./conponment/contacts/Contact'
import Reserver from './conponment/reserver/Reserver'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/Accueil" component={Accueil}/>
        <Route exact path="/Decouvrir" component={Decouvrir}/>
        <Route exact path="/Chambres" component={Chambreslist}/>
        <Route  exact path="/Contact" component={Contact}/>
        <Route  exact path="/Reserver" component={Reserver}/>
        <Route  exact path="/Identifier" component={Identifier} />
        <Route exact path="/Inscrire" component={Inscrire} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
