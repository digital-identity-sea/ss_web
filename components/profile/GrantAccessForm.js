import * as React from 'react';
import withForm from '../../nextjslib/hoc/withForm';
import DateTextField from '../../nextjslib/components/input/DateTextField';
import CheckboxField from '../../nextjslib/components/input/CheckboxField';
import { Button } from '../../nextjslib/components/button/Button';
import { GRANT_ACCESS_FORM_KEYS } from '../../constants/profile';
const { EXPIRY_DATE, DELETE_AFTER_ACCESSED } = GRANT_ACCESS_FORM_KEYS;
/**
 * @param {GrantAccessFormProps} props
 */
function GrantAccessForm(props) {
    const form = props.form;
    const fields = form.fields;
    return (
        <div>
            <DateTextField label={EXPIRY_DATE.displayName} onChange={form.handleChange(EXPIRY_DATE.key)} {...fields[EXPIRY_DATE.key]} />
            <div className="d-flex mt-3">
                <CheckboxField onChange={form.handleChange(DELETE_AFTER_ACCESSED.key)} {...fields[DELETE_AFTER_ACCESSED.key]} />
                <div className="p-1" />
                <div className="d-flex align-items-center">
                    <span>{DELETE_AFTER_ACCESSED.displayName}</span>
                </div>
            </div>
        </div>
    );
}
export default withForm(GrantAccessForm, {
    initialState: {
        [EXPIRY_DATE.key]: { value: null },
        [DELETE_AFTER_ACCESSED.key]: { value: false },
    },
});
/**
 * @typedef {WithFormHOCProps} GrantAccessFormProps
 */
/**
 * @typedef {import('../../nextjslib/hoc/withForm').WithFormHOCProps} WithFormHOCProps
 */
