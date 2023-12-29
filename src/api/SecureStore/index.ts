import * as SecureStore from 'expo-secure-store';

export const secureStoreSave = async (key: string, value: string) => {
  try {
    if (!value) {
      throw 'Please enter a value';
    }
    await SecureStore.setItemAsync(key, value);
    const storedValue = await SecureStore.getItemAsync(key);
    if (storedValue === value) {
      console.log(`Value for ${key} successfully saved in SecureStore`);
    } else {
      throw 'Something happened, please try again';
    }
  } catch (err) {
    console.error(err);
  }
};

export const secureStoreGetValueFor = async (key: string) => {
  try {
    const storedValue = await SecureStore.getItemAsync(key);
    if (storedValue) {
      return storedValue;
    }
    return '';
  } catch (err) {
    console.error(err);
  }
  return '';
};

export const secureStoreDelete = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.error(err);
  }
};
