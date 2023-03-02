import { Error } from "./error";

export class ApiErrorResponce {
    status: string;
    statusText: string;
    url: string;
    ok: boolean;
    message: string;
    error: Error;

    constructor() {
    }
}