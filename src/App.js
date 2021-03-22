import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import verifySession from './verify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostPage from './components/PostPage'
import EditPost from './components/EditPost';
import SignUp from './components/signUp';
import LogIn from './components/LogIn';
import EditComment from './components/EditComment';
import PostList from './components/postList';
import { getUnpublishedList } from './components/Calls';

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
            <PostList getData={getUnpublishedList}/>
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