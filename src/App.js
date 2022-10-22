import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoricPage from "./pages/HistoricPage/HistoricPage"
import GlobalStyle from "./assets/GlobalStyles"
import React from "react"
import { useAuth } from "./providers/auth"

export default function App() {
  const { user, setUser } = useAuth()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/historic" element={<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  )
}