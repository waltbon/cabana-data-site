export interface IAuth0Lock {
    domain: string;
    clientId: string;
    options: {
        language: string;
        auth: {
            redirectUrl: string;
        }
        theme: {
            logo: string;
        }
    }
}