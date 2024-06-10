export function hasAccount() {
    return localStorage.getItem('creds') != null;
}

export function getAccount() {
    return localStorage.getItem('creds');
}

export function addAccount(token) {
    localStorage.setItem('creds', JSON.stringify(token));
}

export function removeAccount() {
    localStorage.removeItem('creds');
}

export function clearDB(){
    localStorage.clear();
}
