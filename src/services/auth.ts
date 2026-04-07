const AUTH_TOKEN_KEY = "authToken";
const AUTH_REFRESH_TOKEN_KEY = "authRefreshToken";
const AUTH_USERNAME_KEY = "authUsername";

export function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function getAuthRefreshToken(): string | null {
  return localStorage.getItem(AUTH_REFRESH_TOKEN_KEY);
}

export function setAuthRefreshToken(token: string): void {
  localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, token);
}

export function clearAuthRefreshToken(): void {
  localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
}

export function getAuthUsername(): string | null {
  return localStorage.getItem(AUTH_USERNAME_KEY);
}

export function setAuthUsername(username: string): void {
  localStorage.setItem(AUTH_USERNAME_KEY, username);
}

export function clearAuthUsername(): void {
  localStorage.removeItem(AUTH_USERNAME_KEY);
}

export function clearAuthStorage(): void {
  clearAuthToken();
  clearAuthRefreshToken();
  clearAuthUsername();
}
