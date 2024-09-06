export type IUser = {
  id: number,
  name: string,
  email: string,
}

export type IloggedUser = {
  token: string,
  user: IUser
}