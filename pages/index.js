import * as React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeaderToolbar from '../components/layout/HeaderToolbar';
import * as UserController from '../controllers/user';
import DecryptProfileForm from '../components/profile/DecryptProfileForm';
import ManageProfileForm from '../components/profile/ManageProfileForm';
import { getConfig } from '../config/index';
const PAGE_TITLE = 'Digital Identity | Authentication';
const config = getConfig();
/**
 * @param {IndexPageProps} props
 */
function IndexPage(props) {
    const [profile, setProfile] = React.useState({
        dateOfBirth: null,
        email: null,
        fullName: null,
        phoneMobile: null,
        isLoaded: false,
    });
    const [accessGrants, setAccessGrants] = React.useState([]);
    const decryptProfile = async (formData) => {
        const profile = await UserController.decryptProfile(formData);
        setProfile({
            ...profile,
            isLoaded: true,
        });
    };
    const grantAccess = async (configuration) => {
        const { isLoaded, ...profileData } = profile;
        const access = await UserController.grantAccess(profileData, configuration);
        const accessGrant = {
            ...access,
            url: `${config.WEB_ROOT_URL}/access/${encodeURIComponent(access.accessGrantId)}`,
        };
        setAccessGrants([...accessGrants, accessGrant]);
    };
    return (
        <MainLayout title={PAGE_TITLE}>
            <HeaderToolbar title={PAGE_TITLE} />
            <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            {!profile.isLoaded && <DecryptProfileForm decryptProfile={decryptProfile} />}
                            {profile.isLoaded && <ManageProfileForm {...profile} onGrantAccess={grantAccess} />}
                        </div>
                    </div>
                </div>
                <br />
                {accessGrants.map((accessGrant, idx) => (
                    <AccessGrantItem key={idx} {...accessGrant} />
                ))}
            </div>
        </MainLayout>
    );
}
export default IndexPage;
/**
 * @typedef {*} IndexPageProps
 */

function AccessGrantItem(accessGrant) {
    const { url } = accessGrant;
    return (
        <div>
            <a href={url} target="_blank">
                {url}
            </a>
        </div>
    );
}
