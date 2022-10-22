import {Box, Grid, FormControl, TextField} from '@mui/material';
import {useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from "@material-ui/icons/Clear";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';


const Header = () => {
    const [searchText, setSearchText] = useState('');
    const [showClearIcon, setShowClearIcon] = useState("none");
    const handelChange = (event) => {
        setSearchText(event.target.value);
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    }
    const handleClick = () => {
        setSearchText('');
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={6}>
                <Grid item xs>
                    <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                        <FormControl variant="standard">
                            <TextField
                                onChange={handelChange}
                                value={searchText}
                                placeholder='search'
                                id="input-with-icon-adornment"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            style={{display: showClearIcon}}
                                            onClick={handleClick}
                                        >
                                            <ClearIcon/>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;