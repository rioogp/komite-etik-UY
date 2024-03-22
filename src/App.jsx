import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DashboardLayout from "./components/DashboardLayout";
import VerificationUser from "./pages/VerificationUser";
import MeetingSchedule from "./pages/MeetingSchedule";
import Files from "./pages/Files";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import TitleProvider from "./contexts/TitleContext";
import HomeLayout from "./components/HomeLayout";
import Homepage from "./pages/homepage/Homepage";
import RulesAndQuestions from "./pages/rulesAndQuestions/RulesAndQuestions";
import Reviews from "./pages/reviews/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification-user" element={<VerificationUser />} />
        <Route
          element={
            <TitleProvider>
              <DashboardLayout />
            </TitleProvider>
          }
        >
          <Route path="/rapat" element={<MeetingSchedule />} />
          <Route path="/berkas" element={<Files />} />
          <Route path="/notifikasi" element={<Notification />} />
          <Route path="/pengaturan" element={<Settings />} />
        </Route>
        <Route element={<HomeLayout />}>
          <Route index element={<Homepage />} />
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route
            path="/peraturan-dan-pertanyaan"
            element={<RulesAndQuestions />}
          />
          <Route path="/ulasan" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
