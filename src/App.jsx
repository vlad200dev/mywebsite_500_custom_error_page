import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as PropTypes from "prop-types";
import Home from "./pages/Home.jsx";

function Navigate(props) {
    return null;
}

Navigate.propTypes = {
    replace: PropTypes.bool,
    to: PropTypes.string
};

function App() {

    const helmetContext = {};

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
