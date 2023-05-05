import { useState, useEffect } from "react"
import Movie from "./Movie";
import MovieCard from "../components/MovieCard";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl)
    }, [])

    const [AuthUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('Signed out sucessfully!')
        }).catch(error => console.log(error))
    }

    return (
        <div className="container">

<div style={{textAlign:"center"}} w>{AuthUser ? <><p>{`Signed In as ${AuthUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}</div>
            <h2 className="title"> Indicados a 95° Premiação da Academy Awards Ver todos</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home