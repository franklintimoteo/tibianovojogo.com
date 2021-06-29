import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './components/Auth/AuthContext';

import { Characters } from './pages/Characters/Characters';
import { Home } from './components/Home/Home';
import './global.scss';


function App() {
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/characters/' exact component={Characters} />
          </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
