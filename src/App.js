import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import verifySession from './verify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostPage from './components/PostPage'
import PostEdit from './components/PostEdit';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import EditComment from './components/EditComment';
import PostList from './components/PostList';
import { getUnpublishedList } from './components/postCalls';
import Router from './components/Router'

function App() {
  verifySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Router path={'/api/signup'} component={<SignUp/>} />
          <Router path={'/api/login'} component={<LogIn/>} />
          <Route exact path={'/api/posts/:id'}>
            <PostPage/>
          </Route>
          <Route exact path={'/api/posts/edit/:id'}>
            <PostEdit/>
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