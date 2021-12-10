import { BrowserRouter, Switch, Route } from "react-router-dom"
import {HomePage} from "../pages/HomePage/HomePage"
import {TripsListPage} from "../pages/TripsListPage/TripsListPage"
import {ApplicationFormPage} from "../pages/ApplicationFormPage/ApplicationFormPage"
import {LoginPage} from "../pages/LoginPage/LoginPage"
import {AdminHomePage} from "../pages/AdminHomePage/AdminHomePage"
import {CreateTripPage} from "../pages/CreateTripPage/CreateTripPage"
import {TripDetailsPage} from "../pages/TripDetailsPage/TripDetailsPage"
import { Header } from "../Components/Header/Header"


export const Router = ()=> {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path={"/"}>
                <HomePage/>
            </Route>
            <Route exact path={"/trips/list"}>
                <TripsListPage/>
            </Route>
            <Route exact path={"/trips/application"}>
                <ApplicationFormPage/>
            </Route>
            <Route exact path={"/login"}>
                <LoginPage/>
            </Route>
            <Route exact path={"/admin/trips/list"}>
                <AdminHomePage/>
            </Route>
            <Route exact path={"/admin/trips/create"}>
                <CreateTripPage/>
            </Route>
            <Route exact path={"/admin/trips/:id"}>
                <TripDetailsPage/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}