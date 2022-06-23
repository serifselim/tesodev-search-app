import React, { useState, useEffect } from 'react';
// Styles
import styles from './Add.module.css';
import utilsStyles from '../../styles/utils.module.css';
// Redux
import { useDispatch } from 'react-redux';
import { addNewItemToArr } from '../../features/searchSlice';

const padTo2Digits = (num) => num.toString().padStart(2, '0');

const formatDate = (date) => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
};

const Add = () => {
    // Styles Variables
    const { container, addBox, addForm, addLabel, err, formItem, errText } = styles;
    const { input, btn } = utilsStyles;
    // Hooks
    const initialValues = { nameSurname: '', email: '', country: '', city: '', date: formatDate(new Date()) };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [canBeSubmit, setCanBeSubmit] = useState(false);
    // Constants
    const formData = [
        {
            label: 'Name Surname',
            value: formValues.nameSurname,
            name: 'nameSurname',
            placeholder: 'Enter Name and Surname',
            errorMessage: formErrors.nameSurname
        },
        {
            label: 'Country',
            value: formValues.country,
            name: 'country',
            placeholder: 'Enter A Country',
            errorMessage: formErrors.country
        },
        {
            label: 'City',
            value: formValues.city,
            name: 'city',
            placeholder: 'Enter A Cit',
            errorMessage: formErrors.city
        },
        {
            label: 'Email',
            value: formValues.email,
            name: 'email',
            placeholder: 'Enter Email',
            errorMessage: formErrors.email
        },
    ];
    // Redux
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && canBeSubmit) {
            const arr = [
                formValues.nameSurname,
                'Example Company Text',
                formValues.email,
                formValues.date,
                formValues.country,
                formValues.city
            ];
            dispatch(addNewItemToArr(arr));
            // Pass control
        }
    }, [formErrors]);

    useEffect(() => {
        let checkEmptyForm = Object.values(formValues).every(item => item ? true : false);
        setCanBeSubmit(checkEmptyForm);
    }, [formValues]);

    const validate = (values) => {
        const errors = {};
        const checkNameSurname = /[a-z]{4,60}$/i;
        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const checkCountryCity = /[a-z]{2,40}$/i;

        if (!values.nameSurname) {
            errors.nameSurname = 'Name Surname is required';
        }
        else if (!checkNameSurname.test(values.nameSurname.trim())) {
            errors.nameSurname = 'Name Surname does not meet the requirements';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        else if (!checkEmail.test(values.email.trim())) {
            errors.email = 'Email does not meet the requirements';
        }
        if (!values.country) {
            errors.country = 'Country is required';
        }
        else if (!checkCountryCity.test(values.country.trim())) {
            errors.country = 'Country does not meet the requirements';
        }
        if (!values.city) {
            errors.city = 'City is required';
        }
        else if (!checkCountryCity.test(values.city.trim())) {
            errors.city = 'City does not meet the requirements';
        }

        return errors;
    };


    return (
        <main className={container}>
            <div className={addBox}>
                <form className={addForm} onSubmit={handleSubmit}>

                    {
                        formData.map((item, i) => (
                            <div key={i} className={`${formItem} ${item.errorMessage && err}`}>
                                <label className={addLabel}>{item.label}</label>
                                <input
                                    onChange={handleChange}
                                    value={item.value}
                                    className={input}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                />
                                <p className={errText}>{item.errorMessage}</p>
                            </div>
                        ))
                    }
                    <button className={btn} disabled={!canBeSubmit}>Add</button>
                </form>
            </div>
        </main>
    );
};

export default Add;