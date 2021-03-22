import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import verifySession from './verify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostPage from './components/PostPage'
import EditPost from './components/EditPost';
import UnpublishedPosts from './components/UnpublishedPosts';
import SignUp from './components/signUp';
import LogIn from './components/LogIn';
import EditComment from './components/EditComment';

function App() {
  verifySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path={'/api/signup'}>
            <SignUp/>
          </Route>
          <Route exact path={'/api/login'}>
            <LogIn/>
          </Route>
          <Route exact path={'/api/posts/:id'}>
            <PostPage/>
          </Route>
          <Route exact path={'/api/posts/edit/:id'}>
            <EditPost/>
          </Route>
          <Route exact path={'/api/unpublished/:id'}>
            <UnpublishedPosts/>
          </Route>
          <Route exact path={'/api/comments/edit/:id'}>
            <EditComment/>
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