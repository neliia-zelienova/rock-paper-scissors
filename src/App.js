import './App.css';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Home from './views/HomeView';
import RandomView from './views/RandomView';
import FootBar from './components/FootBar';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.random} component={RandomView} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      <FootBar />
    </>
  );
}

export default App;
