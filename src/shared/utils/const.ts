export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+/\\.\-~])[A-Za-z\d!@#$%^&*()_+  /\\.\-~]{8,}$/;

export const datesFormat = {
  primary: "DD-MM-YYYY",
  secondary: "DD.MM.YYYY",
  dateAndTime: "DD.MM.YYYY HH:MM",
  time: "HH:MM"
};
