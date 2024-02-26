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

export { OptionHeaderEnum, HeaderKey };
