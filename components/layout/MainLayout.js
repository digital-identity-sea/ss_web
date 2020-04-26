import * as React from 'react';
import Head from 'next/head';
/**
 * @param {MainLayoutProps} props
 */
function MainLayout(props) {
    return (
        <div className="h-100">
            <Head>
                <title>{props.title || 'Digital Identity'}</title>
            </Head>
            <div className="h-100">{props.children}</div>
        </div>
    );
}
export default MainLayout;
/**
 * @typedef MainLayoutProps
 * @property {*} [children]
 * @property {string} [title]
 */
