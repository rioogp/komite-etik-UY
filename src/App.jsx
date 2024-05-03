import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
import VerificationSuccess from "./pages/VerificationSuccess";
import Reviews from "./pages/Reviews";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verification" element={<VerificationUser />} />
          <Route
            path="/verification/:token"
            element={<VerificationSuccess />}
          />

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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#babdc2",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
