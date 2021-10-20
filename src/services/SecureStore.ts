import * as SecureStore from "expo-secure-store";

export const saveValue = async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, value);
};

export const getValue = async (key: string) => {
    const value: string | null = await SecureStore.getItemAsync(key);

    return value;
};
