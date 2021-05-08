import './App.css';
import { HomePage } from './pages/homepage/HomePage';
import { Shop } from './pages/shop/Shop';
import { Header } from './components/header/Header';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
