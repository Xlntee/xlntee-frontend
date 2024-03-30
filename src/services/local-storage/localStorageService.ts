export const localStorageService = {
  set: (key: string, item: string) => {
    localStorage.setItem(key, item);
  },
};
