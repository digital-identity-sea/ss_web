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
 * @typedef ProfileProps
 * @property {string} full_name
 * @property {string} date_of_birth
 */

/**
 * @typedef DecryptInfo
 * @property {string} email
 * @property {string} encryptionKey
 */
