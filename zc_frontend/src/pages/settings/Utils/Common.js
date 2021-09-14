// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null
}
