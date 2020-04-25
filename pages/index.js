import * as React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeaderToolbar from '../components/layout/HeaderToolbar';
import ProfilePicture from '../components/profile/ProfilePicture';
import TextField from '../nextjslib/components/input/TextField';
import FlatButton from '../nextjslib/components/button/FlatButton';
import OutlinedButton from '../nextjslib/components/button/OutlinedButton';
import withForm from '../nextjslib/hoc/withForm';
import * as UserController from '../controllers/user';
const FORM_KEYS = {
    EMAIL: {
        key: 'email',
        displayName: 'Email',
    },
    ENCRYPTION_KEY: {
        key: 'encryptionKey',
        displayName: 'Encryption Key (64 Hexadecimal Characters)',
    },
};
const { EMAIL, ENCRYPTION_KEY } = FORM_KEYS;
const PAGE_TITLE = 'Digital Identity | Authentication';
const BUTTON_LABEL_DECRYPT_PROFILE = 'Decrypt Profile';
/**
 * @param {IndexPageProps} props
 */
function IndexPage(props) {
    const form = props.form;
    const decryptProfile = async () => {
        const isValid = await form.validate();
        if (isValid) {
            await UserController.decryptProfile(form.formData);
        }
    };
    const generateKey = async () => {
        //TODO: Implement generate key method
        const encryptionKey = await UserController.generateEncryptionKey();
        await form.setFieldValue(ENCRYPTION_KEY.key, encryptionKey);
    };
    return (
        <MainLayout title={PAGE_TITLE}>
            <HeaderToolbar title={PAGE_TITLE} />
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            <TextField
                                autocomplete="email"
                                label={EMAIL.displayName}
                                onChange={form.handleChange(EMAIL.key)}
                                {...form.fields[EMAIL.key]}
                            />
                            <TextField
                                label={ENCRYPTION_KEY.displayName}
                                onChange={form.handleChange(ENCRYPTION_KEY.key)}
                                {...form.fields[ENCRYPTION_KEY.key]}
                            />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="d-flex justify-content-end">
                                <div className="" />
                                <FlatButton label={BUTTON_LABEL_DECRYPT_PROFILE} onClick={decryptProfile} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
export default withForm(IndexPage, {
    validations: {
        [EMAIL.key]: (formData, val) => (val ? '' : 'Email cannot be empty'),
        [ENCRYPTION_KEY.key]: (formData, val) => (val ? '' : 'Encryption key cannot be empty'),
    },
});
/**
 * @typedef {WithFormHOCProps} IndexPageProps
 */
/**
 * @typedef {import('../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
