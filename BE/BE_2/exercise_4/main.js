const LogEventEmitter = require('./logEventEmitter');
const customEventEmitter = new LogEventEmitter();

// Simulating random user logins and logouts
function simulateEvent() {
    const username = `USER_${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;

    if (customEventEmitter.loggedInUsers.size === 0 || Math.random() < 0.5) {
        customEventEmitter.emit('userLoggedIn', username);
    } else {
        const usersArray = Array.from(customEventEmitter.loggedInUsers);
        const randomUserToLogout = usersArray[Math.floor(Math.random() * usersArray.length)];
        customEventEmitter.emit('userLoggedOut', randomUserToLogout);
    }

    setTimeout(simulateEvent, Math.floor(Math.random() * 1900) + 100);
}

simulateEvent();