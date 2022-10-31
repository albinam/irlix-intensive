import './App.scss';
import Main from "./pages/Main/Main";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "./pages/Detail/Detail";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/irlix-intensive/" element={<Main/>}/>
                    <Route exact path="/irlix-intensive/drink/:id" element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
