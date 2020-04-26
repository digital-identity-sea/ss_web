import * as React from 'react';
import Dialog from '../../nextjslib/components/dialog/Dialog';
import { Button } from '../../nextjslib/components/button/Button';
import GrantAccessForm from './GrantAccessForm';
/**
 * @param {GrantAccessDialogProps} props
 */
function GrantAccessDialog(props) {
    const { isOpen, closeDialog, confirm } = props;
    const onConfirmClicked = async () => {
        let isValid = await grantAccessForm.current.validate();
        if (isValid) {
            let formData = grantAccessForm.current.getFormData();
            confirm(formData);
        }
    };
    const grantAccessForm = React.useRef(null);
    return (
        <Dialog title="Grant Access | Configuration" open={isOpen} onClose={closeDialog}>
            <div className="mb-3">
                <GrantAccessForm ref={grantAccessForm} />
                <div className="mt-3 d-flex justify-content-end">
                    <Button label="Confirm" onClick={onConfirmClicked} />
                </div>
            </div>
        </Dialog>
    );
}
export default GrantAccessDialog;
/**
 * @typedef GrantAccessDialogProps
 * @property {boolean} [isOpen]
 * @property {function} closeDialog
 * @property {function} confirm
 */
