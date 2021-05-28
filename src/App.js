import './App.css';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/homepage/HomePage';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/SignInAndSignOut';
import { Shop } from './pages/shop/Shop';
import { Header } from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.util';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/signin'>
          <SignInAndSignUp />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
