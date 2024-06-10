import { getAccount, hasAccount, removeAccount } from '../db.js'

if(!hasAccount()) window.location.replace('/')
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('change-account').addEventListener('click', () => changeAccount())
})

function changeAccount() {
    removeAccount();
    window.location.replace('/')
}