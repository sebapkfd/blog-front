import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import verifySession from './functions/verify';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostPage from './components/PostPage'
import PostEdit from './components/PostEdit';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import EditComment from './components/EditComment';
import PostList from './components/PostList';
import { getUnpublishedList } from './functions/postCalls';
import Router from './components/Router'

function App() {
  verifySession();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Router path={'/blog-front/signup'} component={<SignUp/>} logRequired={false}/>
          <Router path={'/blog-front/login'} component={<LogIn/>} logRequired={false}/>
          <Route exact path={'/blog-front/posts/:id'}>
            <PostPage/>
          </Route>
          <Router path={'/blog-front/posts/edit/:id'} component={<PostEdit/>} logRequired={true}/>
          <Router path={'/blog-front/unpublished/:id'} component={<PostList getData={getUnpublishedList}/>} logRequired={true}/>
          <Router path={'/blog-front/comments/edit/:id'} component={<EditComment/>} logRequired={true}/>
          <Route path="/blog-front/"> 
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;