export default interface User {
    access_token: string | null;
    token_type: string | null;
    expires_in: number | string | null;
}