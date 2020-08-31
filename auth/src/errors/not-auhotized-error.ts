import {CustomErrors} from "./custom-errors";

export class NotAuhotizedError  extends  CustomErrors{
    constructor() {
        super('Not authorized');
        Object.setPrototypeOf(this, NotAuhotizedError.prototype);
    }
    statusCode = 401;
    serializeErrors(): { message: string; field?: string }[] {
        return [{
            message : 'Not authorized'
        }];
    }
}