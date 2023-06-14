import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import MovieList from "../Pages/Movie";
import Details from "../Components/DetailsList";
import Counter from "../Pages/Counter";
import Register from "../Components/Singin/Register";
import Login from "../Components/Singin/Login";

export default function Router (){
    return(
        <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}