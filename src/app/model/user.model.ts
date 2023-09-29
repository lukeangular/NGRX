export class User {
    constructor(
        private email: string,
        private token: string,
        private localId: string,
        private expirationdate: Date
    ) {}

    get getExpireDate(){
        return this.expirationdate
    }

    get getAuthToken(){
        return this.token
    }
}