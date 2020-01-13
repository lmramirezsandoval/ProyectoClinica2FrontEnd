export class Authentication {
  static mapFromResponse(data: any): Authentication {
    const authentication = new Authentication(
      data.userName,
      data.access_token
    );
    return authentication;
  }

  constructor(
    public userName: string,
    public token: string
  ) {}
}
