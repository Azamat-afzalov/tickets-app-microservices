import {CustomErrors} from "./custom-errors";

export  class DatabaseConnectionError extends CustomErrors {
    reason = 'Error connecting to database';
    statusCode = 500
    constructor() {
        super('Error connecting to db');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [
            {
                message : this.reason
            }
        ]
    }
}