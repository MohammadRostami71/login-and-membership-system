import {render} from '@testing-library/react';
import PostsLists from './PostsLists';
import {setupServer} from "msw/node";
import {rest} from "msw";
require('./../mocks/handlers')

test('should calling api for ', async () => {
    const server = setupServer(
        rest.get(
            'https://jsonplaceholder.typicode.com/posts',
            (request, response, context) => {
                return response(
                    context.json([
                        {
                            id: 1,
                            title: 'First post',
                            body: 'This is the first post',
                        },
                        {
                            id: 2,
                            title: 'Second post',
                            body: 'This is the second post',
                        },
                    ]),
                );
            },
        ),
    );
    const postsList = render(<PostsLists/>)
    expect(postsList.findByText('First post'))
    expect(postsList.findByText('Second post'))
});

test('should calling bad api and getting error', async () => {
    const server = setupServer(
        rest.get(
            'https://jsonplaceholder.typicode.com/BADAPICALL',
            (request, response, context) => {
                return response.networkError('Failed to connect')
            },
        ),
    );
    const postsList = render(<PostsLists/>)
    expect(postsList.findByText('Failed to connect'))
    // expect(postsList.findByText('Second post'))
});