import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="h-screen flex flex-col">

      {/* Notice Banner */}
      <div className="w-full flex justify-center px-3 py-2 bg-yellow-100 border-b border-yellow-300">
        <h1 className="text-center text-xs sm:text-sm md:text-base text-yellow-800 font-medium">
          Backend is deployed on Render and initial requests may take some time to respond
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>

        <Toaster />
      </div>
    </div>
  );
}

export default App;
