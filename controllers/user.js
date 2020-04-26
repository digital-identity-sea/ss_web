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
 */ import ProfilePicture from '../components/profile/ProfilePicture';

export async function decryptProfile(decryptInfo) {
    const data = await UserService.decryptProfile(decryptInfo);
    return data;
}

/**
 * Grant access to a user's profile
 * @param {import('../services/user').ProfileProps} profile
 * @param {import('../services/user').GrantConfiguration} configuration
 */
export async function grantAccess(profile, configuration) {
    const data = await UserService.grantAccess(profile, configuration);
    return data;
}
