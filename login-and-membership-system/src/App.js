import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import PostsLists from "./pages/PostsLists";
import PostDetails from "./pages/PostDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <SignIn/>
                </Route>
                <Route path='/signin'>
                    <SignIn/>
                </Route>
                <Route path='/signup'>
                    <SignUp/>
                </Route>
                <Route path="/posts/:id">
                    <PostDetails/>
                </Route>
                <Route path='/posts'>
                    <PostsLists/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
