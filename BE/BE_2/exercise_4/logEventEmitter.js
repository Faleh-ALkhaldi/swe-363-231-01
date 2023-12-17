const EventEmitter = require('events');

// Custom event emitter class
class LogEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.loggedInUsers = new Set();

        this.on('userLoggedIn', username => {
            if (!this.loggedInUsers.has(username)) {
                this.loggedInUsers.add(username);
                console.log(`${this.formatTimestamp()}:  ${username} Logged in.`);
            }
        });

        this.on('userLoggedOut', username => {
            if (this.loggedInUsers.has(username)) {
                this.loggedInUsers.delete(username);
                console.log(`${this.formatTimestamp()}:  ${username} Logged out.`);
            }
        });
    }

    formatTimestamp() {
        const now = new Date();
        return `[${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} - ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}:${String(now.getMilliseconds()).padStart(3, '0')}]`;
    }
}

module.exports = LogEventEmitter;