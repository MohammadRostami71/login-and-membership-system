import {render} from '@testing-library/react';
import PostDetails from './PostDetails';
import {setupServer} from "msw/node";
import {rest} from "msw";
import {store} from "./../store/index";
import {Provider} from "react-redux";
import React from "react";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history';


test('should call api and get post detail', () => {
    const server = setupServer(
        rest.get(
            'https://jsonplaceholder.typicode.com/posts/1',
            (request, response, context) => {
                const id = request.url.searchParams.get('id')
                return response(
                    context.status(200),
                    context.json({
                        "userId": 1,
                        "id": id,
                        "title": "first post title",
                        "body": "first post body"
                    }),
                );
            },
        ),
    );
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
        useParams: () => ({
            postId: 'post-id1',
        }),
        useRouteMatch: () => ({url: '/posts/postId'})
    }));
    const history = createMemoryHistory();
    const postDetails = render(
        <Provider store={store()}>
            <Router history={history}>
                <PostDetails/>
            </Router>
        </Provider>
    );
    expect(postDetails.findByText('first post title'));
    expect(postDetails.findByText('first post body'));
    expect(postDetails.findByText('1'));
});

test('should call api but post id not found ', () => {
    const server = setupServer(
        rest.get(
            'https://jsonplaceholder.typicode.com/posts/*BAD_ID',
            (request, response, context) => {
                const id = request.url.searchParams.get('id')
                return response(context.status(404, 'Post Not Found'))
            },
        ),
    );
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
        useParams: () => ({
            postId: 'post-id1',
        }),
        useRouteMatch: () => ({url: '/posts/postId'})
    }));
    const history = createMemoryHistory();
    const postDetails = render(
        <Provider store={store()}>
            <Router history={history}>
                <PostDetails/>
            </Router>
        </Provider>
    );
    expect(postDetails.findByText('Post Not Found'));

});