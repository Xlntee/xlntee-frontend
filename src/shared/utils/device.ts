export function getDeviceId() {
  const navigatorInfo = window.navigator;
  const screenInfo = window.screen;

  let uid = navigatorInfo.mimeTypes.length.toString();
  uid += navigatorInfo.userAgent.replace(/\D+/g, "");
  uid += navigatorInfo.plugins.length;
  uid += screenInfo.height;
  uid += screenInfo.width;
  uid += screenInfo.colorDepth;
  uid += screenInfo.pixelDepth;

  return uid;
}
