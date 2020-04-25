import * as React from 'react';
/**
 * @param {ProfilePictureProps} props
 */
function ProfilePicture(props) {
    let { borderSize, imgSrc, size } = props;
    if (!borderSize) {
        borderSize = 10;
    }
    const innerSize = size - borderSize;
    return (
        <div style={{ width: size, height: size }}>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: size, height: size, backgroundColor: '#e0e0e0', borderRadius: size / 2 }}
            >
                <div style={{ width: innerSize, height: innerSize, backgroundColor: '#cac7c7', borderRadius: size / 2 }}></div>
            </div>
        </div>
    );
}
export default ProfilePicture;
/**
 * @typedef ProfilePictureProps
 * @property {string} imgSrc
 * @property {number} size
 * @property {number} [borderSize]
 */
