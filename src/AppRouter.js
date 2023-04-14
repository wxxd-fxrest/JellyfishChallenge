import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./routers/Auth/Auth";
import Main from "./routers/Main/Main";

const AppRouter = () => {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {/* <Route index element={
                            <ProtectedRoute>
                                <Main />
                            </ProtectedRoute> } /> */}
                        <Route path='/' element={<Auth />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter ; 