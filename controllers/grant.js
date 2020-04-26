import * as GrantService from '../services/grant';
export async function getGrant(accessGrantId) {
    const data = await GrantService.getGrant(accessGrantId);
    return data;
}
