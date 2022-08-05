export enum UserStatusEnum {
  LoggedIn = 'Logged In',
  LoggingIn = 'Logging In',
  LoggedOut = 'Logged Out',
  LogInError = 'Log In Error',
  VerifyingLogIn = 'Verifying Log In',
}

export interface IDesktopContext {
  userStatus: UserStatusEnum;
  setUserStatusTo: (status: UserStatusEnum) => void;
}

export interface IInfoProps {
  id?: string;
}