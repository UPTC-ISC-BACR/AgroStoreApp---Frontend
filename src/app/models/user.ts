export class User {
  constructor(
    public id : number,
    public name: string,
    public typeDocument : string,
    public email: string,
    public password: string,
    public city : string,
    public cellphone : number
  ) {
  }
}
