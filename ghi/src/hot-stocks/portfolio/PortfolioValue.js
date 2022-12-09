import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';


export function PortfolioValue(props) {

    const portfolioCostCurrent = props.portfolioCostCurrent;
    const portfolioCostBasis = props.portfolioCostBasis;

        return(
            <>
                <Typography component="p" variant="h4" sx={{ color: deepOrange[500] }}>
                    C ${portfolioCostCurrent}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    B ${portfolioCostBasis.toFixed(2)}
                </Typography>
            </>
        );
}
