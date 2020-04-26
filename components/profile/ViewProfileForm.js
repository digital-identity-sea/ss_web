import * as React from 'react';
import OutlinedCard from '../../nextjslib/components/card/OutlinedCard';
import TextField from '../../nextjslib/components/input/TextField';
import { PROFILE_FORM_KEYS } from '../../constants/profile';
const { FULL_NAME, DATE_OF_BIRTH, EMAIL, PHONE_MOBILE } = PROFILE_FORM_KEYS;
const CARD_TITLE = 'Profile';
/**
 * @param {ViewProfileFormProps} props
 */
function ViewProfileForm(props) {
    const { fullName, dateOfBirth, email, phoneMobile } = props;
    return (
        <OutlinedCard title={<div className="pl-3 pt-3 pr-3">{CARD_TITLE}</div>}>
            <div className="pl-3 pb-3 pr-3">
                <TextField label={FULL_NAME.displayName} value={fullName} disabled={true} />
                <TextField label={DATE_OF_BIRTH.displayName} value={dateOfBirth} disabled={true} />
                <TextField label={EMAIL.displayName} value={email} disabled={true} />
                <TextField label={PHONE_MOBILE.displayName} value={phoneMobile} disabled={true} />
            </div>
        </OutlinedCard>
    );
}
export default ViewProfileForm;
/**
 * @typedef ViewProfileFormProps
 * @property {string} [fullName]
 * @property {string} [dateOfBirth]
 * @property {string} [email]
 * @property {string} [phoneMobile]
 */
