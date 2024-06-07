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
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import TitleProvider from "./contexts/TitleContext";
import HomeLayout from "./components/HomeLayout";
import Homepage from "./pages/homepage/Homepage";
import RulesAndQuestions from "./pages/rulesAndQuestions/RulesAndQuestions";
import VerificationSuccess from "./pages/VerificationSuccess";
import Reviews from "./pages/Reviews";
import AuthProvider from "./contexts/AuthContext";
import { FaCheck } from "react-icons/fa6";
import Documents from "./pages/documents/applicant/Documents";
import Home from "./pages/Home";
import ApplicantDocuments from "./pages/documents/admin/ApplicantDocuments";
import ReviewerDocuments from "./pages/documents/admin/ReviewerDocuments";
import DocumentsReviewer from "./pages/documents/reviewer/DocumentsReviewer";
import DocumentsDone from "./pages/documents/applicant/DocumentsDone";
import DocumentsChair from "./pages/documents/ketua/DocumentsChair";
import UpdateProfile from "./pages/UpdateProfile";
import AboutUs from "./pages/AboutUs";
import MemberData from "./pages/MemberData";

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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verification" element={<VerificationUser />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
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
              <Route path="/home" element={<Home />} />
              <Route path="/rapat" element={<MeetingSchedule />} />
              <Route path="/berkas" element={<Documents />} />
              <Route path="/berkas-selesai" element={<DocumentsDone />} />
              <Route path="/reviewer/berkas" element={<DocumentsReviewer />} />
              <Route
                path="/admin/berkas/konfirmasi-berkas"
                element={<DocumentsChair />}
              />
              <Route
                path="/admin/berkas/pengaju"
                element={<ApplicantDocuments />}
              />
              <Route
                path="/admin/berkas/reviewer"
                element={<ReviewerDocuments />}
              />
              <Route path="/admin/members" element={<MemberData />} />
              <Route path="/notifikasi" element={<Notification />} />
              <Route path="/pengaturan" element={<Settings />} />
            </Route>
            <Route element={<HomeLayout />}>
              <Route index element={<Homepage />} />
              <Route index element={<Navigate replace to="homepage" />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/tentang" element={<AboutUs />} />
              <Route
                path="/peraturan-dan-pertanyaan"
                element={<RulesAndQuestions />}
              />
              <Route path="/ulasan" element={<Reviews />} />
              <Route path="*" />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <Toaster
        position="top-center"
        gutter={18}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            icon: (
              <div className="w-8 h-8 bg-[#00897c] rounded-md flex justify-center items-center">
                <FaCheck />
              </div>
            ),
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#006A74",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
