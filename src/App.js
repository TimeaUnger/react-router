import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MoviesListPage from './components/moviesListPage'

export default function App(props) {

    return (

      <Routes>
          <Route path='/*' element={<MoviesListPage />} />
      </Routes>

    )
}