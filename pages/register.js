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
    FULL_NAME: {
        key: 'fullName',
        displayName: 'Full Name',
    },
    DATE_OF_BIRTH: {
        key: 'dateOfBirth',
        displayName: 'Date Of Birth (DD/MM/YYYY)',
    },
    EMAIL: {
        key: 'email',
        displayName: 'Email',
    },
    PHONE_MOBILE: {
        key: 'phoneMobile',
        displayName: 'Mobile Number',
    },
    ENCRYPTION_KEY: {
        key: 'encryptionKey',
        displayName: 'Encryption Key (64 Hexadecimal Characters)',
    },
};
const { FULL_NAME, DATE_OF_BIRTH, EMAIL, PHONE_MOBILE, ENCRYPTION_KEY } = FORM_KEYS;
const PAGE_TITLE = 'Digital Identity | Register';
const BUTTON_LABEL_GENERATE = 'Generate';
const BUTTON_LABEL_CREATE_PROFILE = 'Create Profile';
/**
 * @param {IndexPageProps} props
 */
function IndexPage(props) {
    const form = props.form;
    const createUserProfile = async () => {
        const isValid = await form.validate();
        if (isValid) {
            await UserController.uploadUserProfile(form.formData);
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
                            <div className="d-flex justify-content-center">
                                <ProfilePicture imgSrc="" size={300} />
                            </div>
                            <TextField label={FULL_NAME.displayName} onChange={form.handleChange(FULL_NAME.key)} {...form.fields[FULL_NAME.key]} />
                            <TextField
                                autocomplete="bday"
                                label={DATE_OF_BIRTH.displayName}
                                onChange={form.handleChange(DATE_OF_BIRTH.key)}
                                {...form.fields[DATE_OF_BIRTH.key]}
                            />
                            <TextField
                                autocomplete="email"
                                label={EMAIL.displayName}
                                onChange={form.handleChange(EMAIL.key)}
                                {...form.fields[EMAIL.key]}
                            />
                            <TextField
                                label={PHONE_MOBILE.displayName}
                                onChange={form.handleChange(PHONE_MOBILE.key)}
                                {...form.fields[PHONE_MOBILE.key]}
                            />
                            <div className="d-flex">
                                <div className="flex-grow-1 mr-2">
                                    <TextField
                                        label={ENCRYPTION_KEY.displayName}
                                        onChange={form.handleChange(ENCRYPTION_KEY.key)}
                                        {...form.fields[ENCRYPTION_KEY.key]}
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="flex-grow-1" />
                                    <OutlinedButton color="secondary" label={BUTTON_LABEL_GENERATE} onClick={generateKey} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <div className="" />
                                <FlatButton label={BUTTON_LABEL_CREATE_PROFILE} onClick={createUserProfile} />
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
        [FULL_NAME.key]: (formData, val) => (val ? '' : 'Full name name cannot be empty'),
        [DATE_OF_BIRTH.key]: (formData, val) => (val ? '' : 'Date of Birth cannot be empty'),
        [EMAIL.key]: (formData, val) => (val ? '' : 'Email cannot be empty'),
        [PHONE_MOBILE.key]: (formData, val) => (val ? '' : 'Mobile number cannot be empty'),
        [ENCRYPTION_KEY.key]: (formData, val) => (val ? '' : 'Encryption key cannot be empty'),
    },
});
/**
 * @typedef {WithFormHOCProps} IndexPageProps
 */
/**
 * @typedef {import('../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
