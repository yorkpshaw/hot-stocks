import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';


export function ErrorNotification(props) {

    const [error, setError] = useState(<></>)

    if (props.error) {
        setError(
            <Alert variant="outlined" severity="error">
                    {error}
            </Alert>
        )
    }

    return (
        <>
            {error}
        </>

      );

}
