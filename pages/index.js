import * as React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeaderToolbar from '../components/layout/HeaderToolbar';
import * as UserController from '../controllers/user';
import DecryptProfileForm from '../components/profile/DecryptProfileForm';
import ManageProfileForm from '../components/profile/ManageProfileForm';
import { getConfig } from '../config/index';
import RaisedButton from '../nextjslib/components/button/RaisedButton';
import FlatButton from '../nextjslib/components/button/FlatButton';
const PAGE_TITLE = 'Digital Identity';
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
            <div className="h-100">
                <br />
                <div style={{ height: '40%', backgroundColor: '#e4e4e4' }}>
                    <div className="d-flex flex-column h-100">
                        <div className="h-100 d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                                <img src="/logo.png" />
                            </div>
                            <div className="d-flex justify-content-center p-3">
                                <FlatButton
                                    label={
                                        <a style={{ color: 'white' }} href="/register">
                                            Register Now
                                        </a>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
