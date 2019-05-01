import React from 'react';
import { Subscribe } from 'unstated';

import AuthContainer from '../containers/auth.container';

const HomePage = () => {
    return (
        <Subscribe to={[AuthContainer]}>
            {user => (
                <p>Home</p>
            )}
        </Subscribe>
    )
}

export default HomePage;