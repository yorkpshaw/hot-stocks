import Alert from '@mui/material/Alert';


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
