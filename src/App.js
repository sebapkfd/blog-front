import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import verifySession from './verify';
import Home from './components/Home';
import PostPage from './components/PostPage'

function App() {
  verifySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/api/posts/:id'>
            <PostPage/>
          </Route>
          <Route path="/"> 
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;