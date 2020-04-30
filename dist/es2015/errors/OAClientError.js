import messages from './messages';
export default class OAClientError extends Error {
    constructor(code, data) {
        super(`[oa-client:${code}] ${messages[code](data)}`);
        this.code = code;
    }
}
