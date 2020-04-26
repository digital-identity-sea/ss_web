import * as React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeaderToolbar from '../components/layout/HeaderToolbar';
import * as UserController from '../controllers/user';
import DecryptProfileForm from '../components/profile/DecryptProfileForm';
import ManageProfileForm from '../components/profile/ManageProfileForm';
const PAGE_TITLE = 'Digital Identity | Authentication';
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
    const decryptProfile = async (formData) => {
        const profile = await UserController.decryptProfile(formData);
        setProfile({
            ...profile,
            isLoaded: true,
        });
    };
    return (
        <MainLayout title={PAGE_TITLE}>
            <HeaderToolbar title={PAGE_TITLE} />
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            {!profile.isLoaded && <DecryptProfileForm decryptProfile={decryptProfile} />}
                            {profile.isLoaded && <ManageProfileForm {...profile} />}
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
