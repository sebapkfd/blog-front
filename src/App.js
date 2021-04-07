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
          <Router path={'/api/signup'} component={<SignUp/>} logRequired={false}/>
          <Router path={'/api/login'} component={<LogIn/>} logRequired={false}/>
          <Route exact path={'/api/posts/:id'}>
            <PostPage/>
          </Route>
          <Router path={'/api/posts/edit/:id'} component={<PostEdit/>} logRequired={true}/>
          <Route exact path={'/api/unpublished/:id'}>
            <PostList getData={getUnpublishedList}/>
          </Route>
          <Router path={'/api/comments/edit/:id'} component={<EditComment/>} logRequired={true}/>
          <Route path="/"> 
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;