import { UserRole } from "./utils/enum";

type ConfirmationDataType = {
  email: string;
  role: string;
};

class LocalStorageService {
  static tokenKey = "token";
  static minutesMs = 60000;
  static expireTime = 3 * LocalStorageService.minutesMs;

  static emailConfirmation(token: string, email: string, role: UserRole): void {
    const now = new Date();

    const tokenObj = JSON.stringify({
      value: token,
      email: email,
      role: role,
      expire: now.getTime() + LocalStorageService.expireTime
    });

    localStorage.setItem(LocalStorageService.tokenKey, tokenObj);
  }

  static isWaitingConfirmation(): boolean {
    const now = new Date();
    const currentDateTime = now.getTime();

    const tokenObj = localStorage.getItem(LocalStorageService.tokenKey);
    if (!tokenObj) {
      return false;
    }

    const lcObj = JSON.parse(tokenObj);
    if (lcObj.expire < currentDateTime) {
      LocalStorageService.removeTokenConfirmation();
      return false;
    }

    return true;
  }

  static getEmailFromConfirmation(): ConfirmationDataType {
    const tokenObj = localStorage.getItem(LocalStorageService.tokenKey);
    if (!tokenObj)
      return {
        email: "",
        role: ""
      };

    const { email, role } = JSON.parse(tokenObj);
    return {
      email,
      role
    };
  }

  static removeTokenConfirmation(): void {
    localStorage.removeItem(LocalStorageService.tokenKey);
  }
}

export default LocalStorageService;
