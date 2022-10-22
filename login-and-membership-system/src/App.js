import './App.css';
import DashboardLayout from "./components/layout/dashboard/DashboardLayout";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PostsLists from "./pages/PostsLists";
import PostDetails from "./pages/PostDetails";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <DashboardLayout>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <SignIn/>
                    </Route>
                    <Route path="/posts">
                        <PostsLists/>
                    </Route>
                    <Route path="/posts/:id">
                        <PostDetails/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </DashboardLayout>
    );
}

export default App;
