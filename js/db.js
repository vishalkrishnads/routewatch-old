export function hasAccount() {
    return localStorage.getItem('creds') != null;
}

export function getAccount() {
    return JSON.parse(localStorage.getItem('creds'));
}

export function addAccount(token, username = '') {
    console.log(`Set creds to ${JSON.stringify({ token, username })}`)
    localStorage.setItem('creds', JSON.stringify({ token, username }));
}

export function removeAccount() {
    localStorage.removeItem('creds');
}

export function addDevices(devices) {
    localStorage.setItem('devices', JSON.stringify(devices))
}

export function getDevices() {
    return localStorage.getItem('devices')
}

export function setDevice(device) {
    sessionStorage.setItem('device', JSON.stringify(device))
}

export function getDevice() {
    return sessionStorage.getItem('device')
}

export function clearDB() {
    localStorage.clear();
}
