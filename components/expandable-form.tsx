
import React, { useState } from 'react';
import * as yup from 'yup'
import { Schema } from 'yup';

interface ExpandableFormProps {
    schema: yup.Schema
}

export default (props: ExpandableFormProps) => {
    const [fields, setFields] = useState([1,2,3,4]);
    return (
        // TODO: Make a dynamic form field for players' names/ birthdates using yup schema
        <p>{fields}</p>
    )
}
