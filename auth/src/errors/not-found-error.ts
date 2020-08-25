import {CustomErrors} from "./custom-errors";

export class  NotFoundError extends CustomErrors {
    statusCode  = 404
    constructor() {
        super('Not found');
        Object.setPrototypeOf(this,NotFoundError.prototype);
    }
    serializeErrors(): { message: string; field?: string }[] {
        return [
            {
                message : "Not found"
            }
        ];
    }
}