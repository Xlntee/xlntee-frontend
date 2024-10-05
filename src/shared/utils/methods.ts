export function getSecureEmail(email: string): string {
  const [localPart, domain] = email.split("@");

  if (localPart.length <= 4) {
    const maskedLocalPart = localPart.substring(0, 1) + "****";
    return maskedLocalPart + "@" + domain;
  }

  const maskedLocalPart = localPart.substring(0, 3) + "****";
  return maskedLocalPart + "@" + domain;
}

export function maskedCardNumber(cardNumber: string): string {
  let cleanNumber = cardNumber.replace(/\s+/g, "");
  let maskedNumber = cleanNumber.slice(0, -4).replace(/\d/g, "*") + cleanNumber.slice(-4);
  return maskedNumber.replace(/(.{4})/g, "$1 ").trim();
}
