export default class OAClientError extends Error {
    code: number;
    constructor(code: number, data?: Record<string, any>);
}
