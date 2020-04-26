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
    const { error, profile } = props;

    return (
        <MainLayout title={PAGE_TITLE}>
            <HeaderToolbar title={PAGE_TITLE} />
            <div className="h-100 d-flex justify-content-center mt-5">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            {!error && <ViewProfileForm {...profile} />}
                            {error && (
                                <div>
                                    <div>{error}</div>
                                </div>
                            )}
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
 * @property {string} [error]
 */

export async function getServerSideProps(context) {
    const { accessGrantId } = context.query;
    const { error, ...profile } = await getProfileFromGrant(accessGrantId);
    return {
        props: {
            accessGrantId: accessGrantId || null,
            error: error || null,
            profile: profile || null,
        },
    };
}
