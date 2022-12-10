import Alert from '@mui/material/Alert';
import * as React from 'react';


export function ErrorNotification(props) {

    const propError = props.error;

    return (
        <>
            {propError ?
                <Alert variant="outlined" severity="error">
                    {propError}
                </Alert> :
                <></>}
        </>
    );
}
