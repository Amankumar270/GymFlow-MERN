import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import MembersList from "./pages/MemberList";

function App() {
  const navigate = useNavigate();
  
  // 🔄 Switched from localStorage to sessionStorage for automatic tab-close logout!
  const [token, setToken] = useState(sessionStorage.getItem("adminToken") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://gym-flow-mern-backend.vercel.app/api/product/admin/login", {
        email,
        password,
      });

      if (response.data.success) {
        // 🔐 Store strictly in Session Storage
        sessionStorage.setItem("adminToken", response.data.token);
        setToken(response.data.token);
        setEmail("");
        setPassword("");
        navigate("/add"); 
      } else {
        setError(response.data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reach the authentication server.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    setToken("");
    navigate("/");
  };

  // 🔐 1. GATEKEEPER VIEW: If no token exists in current session, force login prompt
  if (!token) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 border border-zinc-200">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-zinc-950 tracking-tight">GymFlow Admin</h1>
            <p className="text-xs text-zinc-500 mt-1">Authorized Headquarters Management Entry</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase text-zinc-700 tracking-wide mb-2">Master Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@gymflow.com"
                className="w-full px-4 py-3 bg-zinc-50 text-sm text-zinc-900 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-zinc-700 tracking-wide mb-2">Secret Key Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 bg-zinc-50 text-sm text-zinc-900 border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-400"
                required
              />
            </div>

            {error && (
              <div className="p-3 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm rounded-lg transition-all active:scale-[0.99] cursor-pointer disabled:opacity-50"
            >
              {loading ? "Authenticating Master Signature..." : "Unlock Admin Workspace"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 🔓 2. UNLOCKED VIEW: Full access active layout
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar onLogout={handleLogout} />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<div className="p-6 text-zinc-600 text-sm">Welcome back, Boss! Choose an option from the sidebar directory.</div>} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/memberList" element={<MembersList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;