import * as React from "react";
import useSWR from 'swr'
import axios from 'axios'
import {Link} from "react-router-dom";
import {Button, ListItemButton, ListItemText, Box, Grid} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import HOC from "../components/layout/HOC";

const PostsLists = () => {
    const fetcher = url => axios.get(url).then(res => res.data)
    const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div><Skeleton animation="wave"
                                     height={500} width={1200}>Loading ...</Skeleton></div>
    return (
        <Box>
            <h1>All Posts</h1>
            {data.map(item => (
                <Grid
                    key={item.id}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <ListItemText primary={item.title}/>
                    <ListItemButton>
                        <Button variant="contained">
                            <Link to={`posts/${item.id}`}> Show Detail</Link>
                        </Button>
                    </ListItemButton>
                </Grid>
            ))}
        </Box>
    )
};

export default HOC(PostsLists);