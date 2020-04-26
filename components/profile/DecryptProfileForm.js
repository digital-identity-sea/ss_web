import * as React from 'react';
import TextField from '../../nextjslib/components/input/TextField';
import FlatButton from '../../nextjslib/components/button/FlatButton';
import withForm from '../../nextjslib/hoc/withForm';
import { isHex } from '../../lib/encryption';
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
const BUTTON_LABEL_DECRYPT_PROFILE = 'Decrypt Profile';

/**
 * @extends {React.Component<DecryptProfileFormProps & WithFormHOCProps>}
 */
class DecryptProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const props = this.props;
        const form = props.form;
        const decryptProfile = props.decryptProfile || (() => {});
        const onDecryptProfileClicked = async () => {
            const isValid = await form.validate();
            if (isValid) {
                decryptProfile(form.formData);
            }
        };
        return (
            <div>
                <TextField autocomplete="email" label={EMAIL.displayName} onChange={form.handleChange(EMAIL.key)} {...form.fields[EMAIL.key]} />
                <TextField label={ENCRYPTION_KEY.displayName} onChange={form.handleChange(ENCRYPTION_KEY.key)} {...form.fields[ENCRYPTION_KEY.key]} />
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex justify-content-end">
                    <div className="" />
                    <FlatButton label={BUTTON_LABEL_DECRYPT_PROFILE} onClick={onDecryptProfileClicked} />
                </div>
            </div>
        );
    }
}

// /**
//  * @param {DecryptProfileFormProps} props
//  */
// function DecryptProfileForm(props) {
//     const form = props.form;
//     const decryptProfile = props.decryptProfile || (() => {});
//     const onDecryptProfileClicked = async () => {
//         const isValid = await form.validate();
//         if (isValid) {
//             decryptProfile(form.formData);
//         }
//     };
//     return (
//         <div>
//             <TextField autocomplete="email" label={EMAIL.displayName} onChange={form.handleChange(EMAIL.key)} {...form.fields[EMAIL.key]} />
//             <TextField label={ENCRYPTION_KEY.displayName} onChange={form.handleChange(ENCRYPTION_KEY.key)} {...form.fields[ENCRYPTION_KEY.key]} />
//             <br />
//             <br />
//             <br />
//             <br />
//             <div className="d-flex justify-content-end">
//                 <div className="" />
//                 <FlatButton label={BUTTON_LABEL_DECRYPT_PROFILE} onClick={onDecryptProfileClicked} />
//             </div>
//         </div>
//     );
// }
export default withForm(DecryptProfileForm, {
    validations: {
        [EMAIL.key]: (formData, val) => (val ? '' : 'Email cannot be empty'),
        [ENCRYPTION_KEY.key]: (formData, val) => {
            if (!val) {
                return 'Encryption key cannot be empty';
            }
            if (`${val}`.length !== 64) {
                return 'Encryption key must be 64 character hexadecimal string';
            }
            if (!isHex(val)) {
                return 'Only hexadecimal characters are allowed';
            }
            return '';
        },
    },
});
/**
 * @typedef DecryptProfileFormProps
 * @property {function} [decryptProfile]
 */
/**
 * @typedef {import('../../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
