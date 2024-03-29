//general layout of website
import PhoneNav from "./components/nav/PhoneNav";
import DesktopNav from "./components/nav/DesktopNav";
import { Route, Routes, Navigate } from "react-router-dom";
import Transcribe from "./pages/Transcribe";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Alert from "./components/alert/Alert";
import AlertProvider from "./context/AlertContext";
import LinkToCode from "./components/ui/LinkToCode";
import { useState } from "react";
//import Pagination from "./components/ui/Pagination";
const App = () => {
    const [dark, setdark] = useState(true);
    return (
        <AlertProvider>
            <div
                className={`
                grid grid-cols-1 grid-rows-[3rem_1fr]
                md:grid-cols-[5fr_10rem] md:grid-rows-1
                min-h-screen
                font-iranYekan
                bg-gray-100
                ${dark ? "dark" : null}  dark:bg-neutral-900`}
            >
                {/*link to source code*/}

                <LinkToCode />
                {/*custom alert box*/}
                <Alert />
                <div className="md:hidden">
                    <PhoneNav />
                </div>
                <div className="hidden col-start-2 md:block">
                    <DesktopNav setdark={setdark} />
                </div>
                <div className="grid md:row-start-1">
                    <Routes>
                        <Route
                            path="/Ava-ts"
                            element={
                                <Navigate replace to="/Ava-ts/transcribe" />
                            }
                        />
                        <Route
                            path="/Ava-ts/transcribe"
                            element={<Transcribe />}
                        />
                        <Route path="/Ava-ts/archive" element={<Archive />} />
                        <Route path="/Ava-ts/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </AlertProvider>
    );
};
export default App;
