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
    FULL_NAME: 'full_name',
    DATE_OF_BIRTH: 'date_of_birth',
    EMAIL: 'email',
    PHONE_MOBILE: 'phone_mobile',
    ENCRYPTION_KEY: 'encryption_key',
};
const { FULL_NAME, DATE_OF_BIRTH, EMAIL, PHONE_MOBILE, ENCRYPTION_KEY } = FORM_KEYS;
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
        await form.setFieldValue(ENCRYPTION_KEY, encryptionKey);
    };
    return (
        <MainLayout title="Digital Identity | Register">
            <HeaderToolbar title="Digital Identity | Register" />
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="d-flex justify-content-center">
                                <ProfilePicture imgSrc="" size={300} />
                            </div>
                            <TextField label="Full Name" onChange={form.handleChange(FULL_NAME)} {...form.fields[FULL_NAME]} />
                            <TextField
                                autocomplete="bday"
                                label="Date of Birth (DD/MM/YYYY)"
                                onChange={form.handleChange(DATE_OF_BIRTH)}
                                {...form.fields[DATE_OF_BIRTH]}
                            />
                            <TextField autocomplete="email" label="Email" onChange={form.handleChange(EMAIL)} {...form.fields[EMAIL]} />
                            <TextField label="Mobile Number" onChange={form.handleChange(PHONE_MOBILE)} {...form.fields[PHONE_MOBILE]} />
                            <div className="d-flex">
                                <div className="flex-grow-1 mr-2">
                                    <TextField
                                        label="Encryption Key (64 Hexadecimal Characters)"
                                        onChange={form.handleChange(ENCRYPTION_KEY)}
                                        {...form.fields[ENCRYPTION_KEY]}
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="flex-grow-1" />
                                    <OutlinedButton color="secondary" label="Generate" onClick={generateKey} />
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="d-flex justify-content-center">
                                <div className="" />
                                <FlatButton label="Create Profile" onClick={createUserProfile} />
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
        [FULL_NAME]: (formData, val) => (val ? '' : 'Full name name cannot be empty'),
        [DATE_OF_BIRTH]: (formData, val) => (val ? '' : 'Date of Birth cannot be empty'),
        [EMAIL]: (formData, val) => (val ? '' : 'Email cannot be empty'),
        [PHONE_MOBILE]: (formData, val) => (val ? '' : 'Mobile number cannot be empty'),
        [ENCRYPTION_KEY]: (formData, val) => (val ? '' : 'Encryption key cannot be empty'),
    },
});
/**
 * @typedef {WithFormHOCProps} IndexPageProps
 */
/**
 * @typedef {import('../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
