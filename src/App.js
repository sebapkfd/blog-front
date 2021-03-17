import './App.css';
import Form from './components/signUp';
import LogIn from './components/logIn';
import Post from './components/post';
import PostList from './components/postList';
import LogOut from './components/LogOut';

function App() {
  let session = (localStorage.length > 0) ? <Post/> : (
  <div>
    <Form/>
    <LogIn/>
  </div>
  );
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <LogOut/>
      {session}
      <PostList/>
    </div>
  );
}

export default App;