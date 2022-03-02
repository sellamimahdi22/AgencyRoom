import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Nav from './conponment/nav/Nav';
import Decouvrir from'./conponment/decouvrir/Decouvrir'
import Chambreslist from'./conponment/chambres/Chambreslist'
import Contact from'./conponment/contacts/Contact'
import Reserver from './conponment/reserver/Reserver'
import login from './conponment/register/Login';
import Register1 from './conponment/register/Register1';
// import 'antd/dist/antd.css';
import Profile from './conponment/register/Profile';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import Admin from './conponment/Adminsc/Admin';
import Accueil from './conponment/Accueil/Accueil';
import Addchambre from './conponment/chambres/Addchambre';
import Editchamb from './conponment/chambres/Editchamb';
import Details from './conponment/chambres/Details';
import { useSelector } from 'react-redux';
// import useForceUpdate from 'use-force-update';

function App() {
  const [url, setUrl] = useState(window.location.pathname)
  // console.log(url)
  const [fileName, setfileName] = useState('')
  

  const forceUpdate = useForceUpdate();
  const changeStuff = () => {
    setUrl(window.location.pathname)
  
  }
  window.addEventListener('click',changeStuff)
 useEffect(() => {
  
  setfileName(url.substring(url.lastIndexOf('/')+1))
 forceUpdate()
 
   
 }, [url])
 const { loading,chambres} = useSelector((state) => state.chambresreducer);

  
  return (
    <div>
      <BrowserRouter>
      {
        (fileName!== 'Profile'  )&&(fileName!=='Admin')? <Nav />
        : null
      }
      <Switch>
        <Route exact path="/" component={Accueil}/>
        <Route exact path="/Decouvrir" component={Decouvrir}/>
        <Route exact path="/Chambres" component={Chambreslist}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Reserver" component={Reserver}/>
        <Route exact path="/Seconnecter" component={login} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/register" component={Register1} />
        <Route exact path="/add" component={Addchambre} />
        <Route exact path="/Edit/:id" component={Editchamb} />
        <Route exact path="/chambres/details/:id"  exact  render={(props)=> <Details detail={chambres}{...props}/>} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
