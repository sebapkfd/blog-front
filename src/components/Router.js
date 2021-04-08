import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import verifySession from '../functions/verify';

const Router = (props) => {
    const { component, path, logRequired} = props;

    return (
        <Route exact path={path}>
            {verifySession() === logRequired ? component : <Redirect to='/blog-front/'/>}
        </Route>
    )
}

export default Router;