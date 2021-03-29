import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import verifySession from '../verify';

const Router = (props) => {
    const { component, path} = props;

    return (
        <Route exact path={path}>
            {verifySession() ? <Redirect to='/'/> : component}
        </Route>
    )
}

export default Router;