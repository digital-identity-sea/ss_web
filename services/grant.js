import { getConfig } from '../config/index';
import { doPost, doGet } from '../nextjslib/helpers/api';
const config = getConfig();
const { API_URL } = config;
/**
 * Gets a grant by id
 * @param {string} accessGrantId
 */
export async function getGrant(accessGrantId) {
    const url = `${API_URL}/grant/get?accessGrantId=${encodeURIComponent(accessGrantId)}`;
    const response = await doGet(url);
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
