import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesListPage from './components/moviesListPage'
// import MovieDetails from './components/movieDetails'
// import SearchForm from './components/searchForm'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/*' element={<MoviesListPage />}>
                    {/* <Route path='/*' element={<SearchForm />} />
                    <Route path=':movieId' element={<MovieDetails />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}