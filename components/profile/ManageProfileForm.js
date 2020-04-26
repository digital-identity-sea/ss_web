import * as React from 'react';
import OutlinedCard from '../../nextjslib/components/card/OutlinedCard';
import TextField from '../../nextjslib/components/input/TextField';
import { PROFILE_FORM_KEYS } from '../../constants/profile';
import { Button } from '../../nextjslib/components/button/Button';
import GrantAccessDialog from './GrantAccessDialog';
const { FULL_NAME, DATE_OF_BIRTH, EMAIL, PHONE_MOBILE } = PROFILE_FORM_KEYS;
const CARD_TITLE = 'Profile';
const BUTTON_LABEL_GRANT_ACCESS = 'Grant Access';
/**
 * @param {ManageProfileFormProps} props
 */
function ManageProfileForm(props) {
    const { fullName, dateOfBirth, email, phoneMobile } = props;

    const [dialogState, setDialogState] = React.useState({ isOpen: false });
    const openDialog = () => {
        setDialogState({
            ...dialogState,
            isOpen: true,
        });
    };
    const closeDialog = () => {
        setDialogState({
            ...dialogState,
            isOpen: false,
        });
    };
    const confirm = (formData) => {
        setDialogState({
            ...dialogState,
            isOpen: false,
        });
    };
    return (
        <OutlinedCard title={<div className="pl-3 pt-3 pr-3">{CARD_TITLE}</div>}>
            <div className="pl-3 pb-3 pr-3">
                <TextField label={FULL_NAME.displayName} value={fullName} disabled={true} />
                <TextField label={DATE_OF_BIRTH.displayName} value={dateOfBirth} disabled={true} />
                <TextField label={EMAIL.displayName} value={email} disabled={true} />
                <TextField label={PHONE_MOBILE.displayName} value={phoneMobile} disabled={true} />
            </div>
            <div className="p-3 d-flex justify-content-end">
                <Button label={BUTTON_LABEL_GRANT_ACCESS} onClick={openDialog} />
            </div>
            <GrantAccessDialog isOpen={dialogState.isOpen} closeDialog={closeDialog} confirm={confirm} />
        </OutlinedCard>
    );
}
export default ManageProfileForm;
/**
 * @typedef ManageProfileFormProps
 * @property {string} [fullName]
 * @property {string} [dateOfBirth]
 * @property {string} [email]
 * @property {string} [phoneMobile]
 */
