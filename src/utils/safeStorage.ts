/**
 * Safe localStorage/sessionStorage utilities with error handling
 * Prevents app crashes from malformed JSON or storage quota issues
 */

export const safeStorage = {
  /**
   * Safely get and parse JSON from storage
   */
  getItem: <T>(key: string, storage: Storage = localStorage): T | null => {
    try {
      const item = storage.getItem(key);
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(`Failed to parse storage item "${key}":`, error);
      // Clean up corrupted data
      try {
        storage.removeItem(key);
      } catch {}
      return null;
    }
  },

  /**
   * Safely stringify and set JSON to storage
   */
  setItem: <T>(key: string, value: T, storage: Storage = localStorage): boolean => {
    try {
      storage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Failed to save storage item "${key}":`, error);
      return false;
    }
  },

  /**
   * Safely remove item from storage
   */
  removeItem: (key: string, storage: Storage = localStorage): void => {
    try {
      storage.removeItem(key);
    } catch (error) {
      console.error(`Failed to remove storage item "${key}":`, error);
    }
  },

  /**
   * Clear all app storage (useful for dev reset)
   */
  clearAll: (): void => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  },

  /**
   * Clear IndexedDB (for complete reset)
   */
  clearIndexedDB: async (): Promise<void> => {
    if (!window.indexedDB) return;
    
    try {
      const databases = await window.indexedDB.databases();
      await Promise.all(
        databases.map((db) => {
          if (db.name) {
            return new Promise<void>((resolve) => {
              const request = window.indexedDB.deleteDatabase(db.name!);
              request.onsuccess = () => resolve();
              request.onerror = () => resolve(); // Resolve anyway
            });
          }
          return Promise.resolve();
        })
      );
    } catch (error) {
      console.error('Failed to clear IndexedDB:', error);
    }
  },
};
