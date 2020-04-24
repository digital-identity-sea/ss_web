import * as React from 'react';
import Head from 'next/head';
/**
 * @param {MainLayoutProps} props
 */
function MainLayout(props) {
    return (
        <div>
            <Head>
                <title>{props.title || 'Digital Identity'}</title>
            </Head>
            <div>{props.children}</div>
        </div>
    );
}
export default MainLayout;
/**
 * @typedef MainLayoutProps
 * @property {*} [children]
 * @property {string} [title]
 */
