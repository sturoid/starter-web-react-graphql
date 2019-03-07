export function setAuthToken(token) {
  localStorage.setItem('AUTH_TOKEN', token);
  window.location.reload();
}

export function signOut() {
  localStorage.removeItem('AUTH_TOKEN');
  window.location.reload();
}

export function userIsLoggedIn() {
  return !!localStorage.getItem('AUTH_TOKEN');
}

export default userIsLoggedIn;
