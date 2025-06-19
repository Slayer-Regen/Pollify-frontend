import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/loginPage/LoginPage";
import TeacherLandingPage from "./Pages/teacher-landing/TeacherLandingPage";
import StudentLandingPage from "./Pages/student-landing/StudentLandingPage";
import StudentPollPage from "./Pages/student-poll/StudentPollPage";
import TeacherPollPage from "./Pages/teacher-poll/TeacherPollPage";
import PollHistoryPage from "./Pages/poll-history/PollHistory";
import TeacherProtectedRoute from "./components/route-protect/TeacherProtect";
import StudentProtectedRoute from "./components/route-protect/StudentProtect";
import { useTheme } from "./context/ThemeContext"; // ✅ import

function App() {
  const { darkMode, toggleDarkMode } = useTheme(); // ✅ use hook

  return (
    <>
      {/* Toggle at top right */}
      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}>
        <button onClick={toggleDarkMode} className="btn btn-outline-secondary">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/teacher-home-page"
          element={
            <TeacherProtectedRoute>
              <TeacherLandingPage />
            </TeacherProtectedRoute>
          }
        />
        <Route path="/student-home-page" element={<StudentLandingPage />} />
        <Route
          path="/poll-question"
          element={
            <StudentProtectedRoute>
              <StudentPollPage />
            </StudentProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll"
          element={
            <TeacherProtectedRoute>
              <TeacherPollPage />
            </TeacherProtectedRoute>
          }
        />
        <Route
          path="/teacher-poll-history"
          element={
            <TeacherProtectedRoute>
              <PollHistoryPage />
            </TeacherProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;