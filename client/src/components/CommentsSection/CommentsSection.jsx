import { CircularProgress, Rating } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import {
    fetchFeedbackByServiceId,
    fetchResponsesByServiceId,
    postFeedback,
} from '../../http/serviceApi';
import ServiceStore from '../../store/ServiceStore';
import UserStore from '../../store/UserStore';
import { Feedback } from './Feedback';
import { Response } from './Response';

export const CommentsSection = observer(({ id }) => {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetchFeedbackByServiceId(id)
            .then((data) => {
                ServiceStore.setFeedbacks(data.data);
                fetchResponsesByServiceId(id).then((data) => {
                    ServiceStore.setResponses(data.data);
                });
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handlePostFeedback = async () => {
        if (!!text) {
            postFeedback(rating, text, UserStore.user.login, id)
                .then((data) => {
                    setText('');
                    setRating(0);
                    fetchFeedbackByServiceId(id)
                        .then((data) => {
                            ServiceStore.setFeedbacks(data.data);
                            fetchResponsesByServiceId(id).then((data) => {
                                ServiceStore.setResponses(data.data);
                            });
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    return (
        <section className='bg-white dark:bg-gray-900 py-8 lg:py-16 h-full'>
            <div className='w-full h-1 bg-gray-800 my-10' />
            <div className='max-w-2xl mx-auto px-4'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>
                        Discussion ({ServiceStore.feedbacks.length})
                    </h2>
                </div>
                <form className='mb-6'>
                    <Rating
                        name='simple-controlled'
                        value={rating}
                        required={true}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                        <label label='comment' className='sr-only'>
                            Your comment
                        </label>
                        <textarea
                            id='comment'
                            rows='6'
                            className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
                            placeholder='Write a comment...'
                            onChange={handleOnChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type='button'
                        className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-gray-200 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-primary-800'
                        onClick={handlePostFeedback}
                    >
                        Post feedback
                    </button>
                </form>

                {ServiceStore?.feedbacks?.map((feedback, index) => {
                    return (
                        <div key={feedback.feedback_id + `${index}`}>
                            <Feedback
                                key={feedback.id}
                                name={feedback.feedback_user_name}
                                surname={feedback.feedback_user_surname}
                                date={feedback.feedback_date.substring(0, 10)}
                                login={feedback.feedback_user_login}
                                text={feedback.feedback_text}
                                rating={feedback.rating}
                                feedback_id={feedback.feedback_id}
                            />

                            {ServiceStore?.responses?.map((response, index) => {
                                if (
                                    response.feedback_id ===
                                    feedback.feedback_id
                                ) {
                                    return (
                                        <Response
                                            key={index}
                                            name={response.response_user_name}
                                            surname={
                                                response.response_user_surname
                                            }
                                            date={response.response_date.substring(
                                                0,
                                                10
                                            )}
                                            login={response.response_user_login}
                                            text={response.response_text}
                                        />
                                    );
                                }
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
});
