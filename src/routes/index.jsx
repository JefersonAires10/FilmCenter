import { Routes, Route, Navigate } from 'react-router-dom'
import PageBase from './PageBase'
import DashBoard from '../shared/components/DashBoard'
import Favorites from '../shared/components/Favoritos'
import Home from '../shared/components/Home'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PageBase />}>
                <Route index element={<Navigate to="/home" />} />
                <Route path="favoritos" element={<Favorites />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    )
}
