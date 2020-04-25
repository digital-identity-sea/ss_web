import * as React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeaderToolbar from '../components/layout/HeaderToolbar';
import ProfilePicture from '../components/profile/ProfilePicture';
import TextField from '../nextjslib/components/input/TextField';
import FlatButton from '../nextjslib/components/button/FlatButton';
import withForm from '../nextjslib/hoc/withForm';
/**
 * @param {IndexPageProps} props
 */
function IndexPage(props) {
    const form = props.form;
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
                            <TextField label="Full Name" onChange={form.handleChange('full_name')} {...form.fields['full_name']} />
                            <TextField
                                autocomplete="bday"
                                label="Date of Birth (DD/MM/YYYY)"
                                onChange={form.handleChange('date_of_birth')}
                                {...form.fields['date_of_birth']}
                            />
                            <div className="d-flex">
                                <div className="flex-grow-1 mr-2">
                                    <TextField
                                        label="Encryption Key (32 Characters)"
                                        onChange={form.handleChange('encryption_key')}
                                        {...form.fields['encryption_key']}
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <div className="flex-grow-1" />
                                    <FlatButton color="secondary" label="Generate" />
                                </div>
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
        full_name: (formData, val) => (val ? '' : 'Full name name cannot be empty'),
        date_of_birth: (formData, val) => (val ? '' : 'Date of Birth cannot be empty'),
        encryption_key: (formData, val) => (val ? '' : 'Encryption key cannot be empty'),
    },
});
/**
 * @typedef {WithFormHOCProps} IndexPageProps
 */
/**
 * @typedef {import('../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
