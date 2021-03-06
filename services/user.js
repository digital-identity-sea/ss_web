import { getConfig } from '../config/index';
import { doPost, doGet } from '../nextjslib/helpers/api';
const config = getConfig();
const { API_URL } = config;
/**
 *
 * @param {ProfileProps} profile
 */
export async function createProfile(profile) {
    const url = `${API_URL}/profile/create`;
    const response = await doPost(url, profile);
    return response.data;
}

export async function generateEncryptionKey() {
    const url = `${API_URL}/encryption/generate-key`;
    const response = await doGet(url);
    return response.data;
}

/**
 * Fetch the decrypted user profile
 * @param {DecryptInfo} decryptInfo
 */
export async function decryptProfile(decryptInfo) {
    const url = `${API_URL}/profile/decrypt`;
    const response = await doPost(url, decryptInfo);
    return response.data;
}

/**
 * Fetch the decrypted user profile
 * @param {ProfileProps} profile
 * @param {GrantConfiguration} configuration
 */
export async function grantAccess(profile, configuration) {
    const url = `${API_URL}/profile/grant-access`;
    const response = await doPost(url, { ...profile, ...configuration });
    return response.data;
}

/**
 * @typedef ProfileProps
 * @property {string} fullName
 * @property {string} dateOfBirth
 * @property {string} email
 * @property {string} phoneMobile
 */

/**
 * @typedef DecryptInfo
 * @property {string} email
 * @property {string} encryptionKey
 */

/**
 * @typedef GrantConfiguration
 * @property {string} expiryDate
 * @property {boolean} deleteAfterAccessed
 */
