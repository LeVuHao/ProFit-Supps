import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login: onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, from, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(username, password, rememberMe);
      onLogin(response.token, response.refreshToken, response.username);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex w-full max-w-6xl px-4 py-12">
      <div className="grid w-full gap-8 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm lg:grid-cols-[1fr_420px]">
        <div className="min-h-[520px] bg-gradient-to-br from-sky-100 via-cyan-50 to-white p-10">
          <div className="flex h-full items-center justify-center rounded-[24px] border border-white/70 bg-white/60 text-center text-6xl font-bold tracking-[0.22em] text-sky-500">
            LOG
          </div>
        </div>
        <div className="flex items-center p-8 md:p-10">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-black">
              Log in to Exclusive
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Enter your details below
            </p>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full border-b border-zinc-200 px-1 py-3 outline-none"
                placeholder="Email or Phone Number"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                className="w-full border-b border-zinc-200 px-1 py-3 outline-none"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="flex items-center gap-2 text-sm text-zinc-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-zinc-300 text-orange-500 focus:ring-orange-500"
                />
                Remember me
              </label>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  className="rounded-md bg-[#db4444] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838] disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Log In"}
                </button>
                <button
                  className="text-sm font-medium text-[#db4444]"
                  type="button"
                >
                  Forget Password?
                </button>
              </div>
            </form>
            <p className="mt-8 text-sm text-zinc-500">
              New here?{" "}
              <Link className="font-semibold text-black underline" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
