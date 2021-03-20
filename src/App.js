import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import verifySession from './verify';
import Home from './components/Home';
import PostPage from './components/PostPage'
import EditPost from './components/EditPost';
import UnpublishedPosts from './components/UnpublishedPosts';

function App() {
  verifySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/api/posts/:id'>
            <PostPage/>
          </Route>
          <Route exact path='/api/posts/edit/:id'>
            <EditPost/>
          </Route>
          <Route exact path='/api/unpublished'>
            <UnpublishedPosts/>
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