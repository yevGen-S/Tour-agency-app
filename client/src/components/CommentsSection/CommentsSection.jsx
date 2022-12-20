import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ServiceStore from '../../store/ServiceStore';
import { Feedback } from './Feedback';
import { Response } from './Response';

export const CommentsSection = ({ id }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetchAllCommentsById(id).then(data => {
        //     ServiceStore.setAllComments(data)
        // })

        // fetchAllResponsesById(id).then(data => {
        //     ServiceStore.setAllResponses(data)
        // })
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 h-full'>
            <div className='w-full h-1 bg-gray-800 my-10' />
            <div className='max-w-2xl mx-auto px-4'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>
                        Discussion (20)
                    </h2>
                </div>
                <form className='mb-6'>
                    <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                        <label label='comment' className='sr-only'>
                            Your comment
                        </label>
                        <textarea
                            id='comment'
                            rows='6'
                            className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
                            placeholder='Write a comment...'
                            required
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-gray-200 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-primary-800'
                    >
                        Post comment
                    </button>
                </form>
                <Feedback
                    name={'Andrei'}
                    surname={'Novikov'}
                    date={'2022-11-02'}
                    login={'novik'}
                    text={'Ohh, nice i like it very much'}
                />

                <Response
                    name={'Andrei'}
                    surname={'Novikov'}
                    date={'2022-11-02'}
                    login={'novik'}
                    text={'Ohh, nice i like it very much'}
                />

                <Feedback
                    name={'Andrei'}
                    surname={'Novikov'}
                    date={'2022-11-02'}
                    login={'novik'}
                    text={'Ohh, nice i like it very much'}
                />

                <Feedback
                    name={'Andrei'}
                    surname={'Novikov'}
                    date={'2022-11-02'}
                    login={'novik'}
                    text={'Ohh, nice i like it very much'}
                />
            </div>
        </section>
    );
};
