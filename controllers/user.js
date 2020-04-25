import * as UserService from '../services/user';
export async function uploadUserProfile(profile) {
    const data = await UserService.createProfile(profile);
    return data;
}
