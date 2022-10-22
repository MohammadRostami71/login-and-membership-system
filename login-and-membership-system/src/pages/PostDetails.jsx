import axios from "axios";
import useSWR from "swr";
import * as React from "react";
import {Box, Card, CardContent, CardActions, Typography, Button} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToFav, removeFromFav} from "../store/favoriteSlice";

const PostDetails = () => {
    let {id} = useParams();
    const dispatch = useDispatch();
    const fetcher = url => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    const addToFavHandler = () => {
        dispatch(addToFav(data.id, data.body));
    };
    const removeFromFavHandler = () => {
        dispatch(removeFromFav(data.id))
    }

    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography color="text.secondary" component="h1">
                        {data.title}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        {data.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={addToFavHandler}>Add To Favorite</Button>
                    <Button size="small" onClick={removeFromFavHandler}>remove From Favorite</Button>
                </CardActions>
            </Card>
        </Box>
    )
};

export default PostDetails;