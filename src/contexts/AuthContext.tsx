import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  clearAuthStorage,
  getAuthRefreshToken,
  getAuthToken,
  getAuthUsername,
  setAuthRefreshToken,
  setAuthToken,
  setAuthUsername,
} from "../services/auth";
import { logoutRequest } from "../services/api";

type AuthContextValue = {
  token: string | null;
  refreshToken: string | null;
  username: string | null;
  isAuthenticated: boolean;
  login: (token: string, refreshToken: string, username: string) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    setToken(getAuthToken());
    setRefreshToken(getAuthRefreshToken());
    setUsername(getAuthUsername());
  }, []);

  const login = (
    newToken: string,
    newRefreshToken: string,
    newUsername: string,
  ) => {
    setToken(newToken);
    setRefreshToken(newRefreshToken);
    setUsername(newUsername);
    setAuthToken(newToken);
    setAuthRefreshToken(newRefreshToken);
    setAuthUsername(newUsername);
  };

  const logout = async () => {
    const currentRefreshToken = getAuthRefreshToken();
    if (currentRefreshToken) {
      try {
        await logoutRequest(currentRefreshToken);
      } catch {
        // Ignore logout failures; clear local state anyway.
      }
    }

    setToken(null);
    setRefreshToken(null);
    setUsername(null);
    clearAuthStorage();
  };

  const value = useMemo(
    () => ({
      token,
      refreshToken,
      username,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, refreshToken, username],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
