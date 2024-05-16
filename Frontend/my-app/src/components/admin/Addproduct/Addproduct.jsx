import React, { useContext } from 'react'
import { Formik } from 'formik'; 
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';

const Addproduct = () => {
    const {data , setData} = useContext(MainContext)
    return (
        <div>
            <h1>Məhsulu daxil edin!</h1>
            <Formik
                initialValues={{ title: '', image: '', price: '', description: '' }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:5000/category",{
                        id: uuidv4(),
                        title: values.title,
                        description: values.description,
                        price: values.price,
                        image: values.image
                    }).then(res=>{
                        setData([...data, res.data])
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && errors.image}
                        <input
                            type="text"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
  
};

export default Addproduct;