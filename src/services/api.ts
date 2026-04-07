import type { Category } from "../data/categories";
import type { Product } from "../data/products";
import {
  clearAuthStorage,
  getAuthRefreshToken,
  getAuthToken,
  setAuthRefreshToken,
  setAuthToken,
  setAuthUsername,
} from "./auth";

const API_BASE = "/api";

type AuthResult = {
  token: string;
  refreshToken: string;
  tokenType: string;
  username: string;
};

async function refreshSession(refreshToken: string): Promise<AuthResult> {
  const response = await fetch(`${API_BASE}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Unable to refresh session.");
  }

  return response.json();
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  retry = true,
): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((options.headers as Record<string, string>) ?? {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (response.ok) {
    return response.json();
  }

  if (response.status === 401 && retry) {
    const refreshToken = getAuthRefreshToken();
    if (refreshToken) {
      try {
        const authResult = await refreshSession(refreshToken);
        setAuthToken(authResult.token);
        setAuthRefreshToken(authResult.refreshToken);
        setAuthUsername(authResult.username);
        return request<T>(path, options, false);
      } catch (refreshError) {
        clearAuthStorage();
        window.location.href = "/login";
        throw new Error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      }
    }
  }

  const text = await response.text();
  throw new Error(text || `Request failed: ${response.status}`);
}

export async function getProducts(): Promise<Product[]> {
  return request<Product[]>("/products");
}

export async function getProductById(id: string): Promise<Product> {
  return request<Product>(`/products/${id}`);
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  return request<Product[]>(`/products/category/${slug}`);
}

export async function getCategories(): Promise<Category[]> {
  return request<Category[]>("/categories");
}

export async function login(
  username: string,
  password: string,
  rememberMe = false,
) {
  return request<AuthResult>(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({ username, password, rememberMe }),
    },
    false,
  );
}

export async function register(data: {
  fullName: string;
  email: string;
  password_hash: string;
  phone?: string;
}) {
  return request<AuthResult>(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
    false,
  );
}

export async function getProfile() {
  return request<{
    id: number;
    username: string;
    email: string;
    fullName: string;
  }>("/auth/me");
}

export async function logoutRequest(refreshToken: string) {
  const response = await fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Logout failed.");
  }
}
