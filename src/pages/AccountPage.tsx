import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

type Profile = {
  id: number;
  username: string;
  email: string;
  fullName: string;
};

export default function AccountPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getProfile()
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        setError(err?.message || "Không thể tải thông tin người dùng.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <div className="rounded-[28px] border border-zinc-200 bg-white p-10 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">My Account</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Quản lý thông tin cá nhân và đăng xuất khỏi phiên hiện tại.
            </p>
          </div>
          <button
            type="button"
            onClick={async () => {
              await logout();
              navigate("/login");
            }}
            className="rounded-full bg-[#db4444] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c83838]"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-zinc-500">Loading profile...</p>
        ) : error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : profile ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Full Name
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">
                {profile.fullName}
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Email
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">
                {profile.email}
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                Username
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">
                {profile.username}
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                User ID
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">
                {profile.id}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
