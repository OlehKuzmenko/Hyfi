export enum UserStatusType{
  AUTHED="auth",
  VISITOR="visitor"
}

export enum WalletType{
  METAMASK="metamask",
  WALLETCONNECT="walletconnect"
}

export interface IUser {
  accountName: string;
  status:`${UserStatusType}`
  walletType:`${WalletType}` | "",
}
