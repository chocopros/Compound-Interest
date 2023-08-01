import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

const Control = styled.div`
    margin: 20px 0;
`;

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
    text-transform: capitalize;
`;

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    border-radius: 4px;
    width: 100%;
    
`;

const ErrorMessage = styled.div`
    color: #f00;
    margin-bottom: 12px;
`;


const Input = ( {label, ...props } ) => {

    const [field, meta] = useField(props);

  return (
    <Control>
        <Label >{label}</Label>
        <MyInput {...field} {...props} />
        {meta.touched && meta.error ? (
            <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}     
    </Control>
  )
}

export default Input