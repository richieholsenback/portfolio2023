import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Home/home"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    )
}