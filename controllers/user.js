import * as UserService from '../services/user';
export async function uploadUserProfile(profile) {
    const data = await UserService.createProfile(profile);
    return data;
}

export async function generateEncryptionKey() {
    const data = await UserService.generateEncryptionKey();
    return data.encryptionKey;
}
