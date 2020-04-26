import * as React from 'react';
import { getGrant as getProfileFromGrant } from '../../services/grant';
import MainLayout from '../../components/layout/MainLayout';
import ViewProfileForm from '../../components/profile/ViewProfileForm';
import HeaderToolbar from '../../components/layout/HeaderToolbar';
const PAGE_TITLE = 'Digital Identity | View Profile';
/**
 * @param {AccessPageProps} props
 */
function AccessPage(props) {
    const profile = props.profile;
    return (
        <MainLayout title={PAGE_TITLE}>
            <HeaderToolbar title={PAGE_TITLE} />
            <div className="h-100 d-flex justify-content-center mt-5">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            <ViewProfileForm {...profile} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
export default AccessPage;
/**
 * @typedef AccessPageProps
 * @property {string} [accessGrantId]
 * @property {*} [profile]
 */

export async function getServerSideProps(context) {
    const { accessGrantId } = context.query;
    const profile = await getProfileFromGrant(accessGrantId);
    return {
        props: {
            accessGrantId,
            profile,
        },
    };
}
