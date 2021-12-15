import React from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


const Router = ({ setRigthButton }) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRigthButton={setRigthButton} />
            </Route>
            <Route exact path="/signup">
                <SignUpPage setRigthButton={setRigthButton} />
            </Route>
            <Route exact path="/">
                <FeedPage />
            </Route>
            <Route exact path="/posts/:id">
                <PostPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default Router;