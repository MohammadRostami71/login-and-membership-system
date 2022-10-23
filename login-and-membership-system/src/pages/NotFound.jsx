import HOC from './../components/layout/HOC';
import {Box} from "@mui/material";

const NotFound = () => {
    return(
        <Box>
            <h1>Page Not Found</h1>
        </Box>
    )
};

export default HOC(NotFound);