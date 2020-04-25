import * as UserService from '../services/user';
/**
 * Upload a user's profile
 * @param {import('../services/user').ProfileProps} profile
 */
export async function uploadUserProfile(profile) {
    const data = await UserService.createProfile(profile);
    return data;
}

export async function generateEncryptionKey() {
    const data = await UserService.generateEncryptionKey();
    return data.encryptionKey;
}

/**
 * Decrypt the user's profile
 * @param {import('../services/user').DecryptInfo} decryptInfo
 */
export async function decryptProfile(decryptInfo) {
    const data = await UserService.decryptProfile(decryptInfo);
    return data;
}
