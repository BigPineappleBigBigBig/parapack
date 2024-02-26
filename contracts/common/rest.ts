enum PlatformType {
  Android = 'h5_android',
  IOS = 'h5_ios',
  WX = 'h5_wx',
  Mobile = 'h5_browser',
  Web = 'web',
}

enum HeaderKey {
  TransId = 'UB-TRANS-ID',
  DeviceId = 'UB-DEVICE-ID',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  PlatformType = 'UB-PLATFORM-TYPE',
  UserToken = 'UB-TOKEN',
  Phone = 'x-cloudbase-phone',
}

enum OptionHeaderEnum {
  CacheControl = 'cache-control',
}

enum SentryCaptureType {
  ApiRequest = 'API_REQUEST',
  NoCaptcha = 'NO_CAPTCHA',
  ContractWrite = 'Contract_Write',
  WalletPay = 'WALLET_PAY',
  WalletApprove = 'WALLET_APPROVE',
  WalletNetwork = 'WALLET_NETWORK',
}

export { OptionHeaderEnum, HeaderKey, PlatformType, SentryCaptureType };
