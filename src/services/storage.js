// API to store app data
class storageService {
  LOCAL_STORAGE_KEY = "sf-moneyItems";

  get() {
    const items = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    if (!items) {
      return {};
    }

    return JSON.parse(items);
  }

  set(key, value) {
    const state = { ...this.get(), [key]: value };

    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(state));
  }
}

export const StorageService = new storageService();
