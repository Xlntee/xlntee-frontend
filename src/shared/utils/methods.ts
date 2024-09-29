export function getSecureEmail(email: string): string {
  const [localPart, domain] = email.split("@");

  if (localPart.length <= 4) {
    const maskedLocalPart = localPart.substring(0, 1) + "****";
    return maskedLocalPart + "@" + domain;
  }

  const maskedLocalPart = localPart.substring(0, 3) + "****";
  return maskedLocalPart + "@" + domain;
}
