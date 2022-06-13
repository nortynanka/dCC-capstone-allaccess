import React, { Component } from 'react';
import AuthContext from '../context/AuthContext';
import useCustomForm from '../hooks/useCustomForm';

const FeedbackPage = () => {
    const defaultValues = {};
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues
    );



    return ( 
        <div>Testing 123</div>
     );
}
 
export default FeedbackPage;