import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import TodayPage from "./pages/TodayPage/TodayPage"
import HistoricPage from "./pages/HistoricPage/HistoricPage"
import GlobalStyle from "./assets/GlobalStyles"

export default function App() {
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