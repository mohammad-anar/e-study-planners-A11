import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllAssignment from "../pages/AllAssignment";
import CreateAssignment from "../pages/CreateAssignment";
import Assignmentdetails from "../pages/Assignmentdetails";
import axios from "axios";
import SubmittedAssignment from "./SubmittedAssignment";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "allassignment",
                element: <AllAssignment></AllAssignment>
            },
            {
                path: "assignments/:id",
                element: <Assignmentdetails></Assignmentdetails>,
                loader: ({params}) => axios.get(`http://localhost:5000/api/v1/assignments/${params.id}`)
            },
            {
                path: "submittedassignment",
                element: <SubmittedAssignment></SubmittedAssignment>
            },
            {
                path: "createassignment",
                element: <CreateAssignment></CreateAssignment>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
]);
export default routes;