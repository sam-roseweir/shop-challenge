export function logout() {
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-role');
    return;
}

export function getUserToken() {
    const userToken = localStorage.getItem('user-token');
    return userToken;
}

export function getUserRole() {
    const userRole = localStorage.getItem('user-role');
    return userRole;
}