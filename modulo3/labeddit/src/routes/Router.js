import React from "react"
import { Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage"
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
                <PostDetailsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default Router;