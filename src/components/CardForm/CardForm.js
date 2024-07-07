import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage } from './CardForm.styled';

const CardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  img: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  desc: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
        .required('Required'),
  category:Yup.string().oneOf(['flowers', 'tree', 'brush' ]).required('Required'),
  price: Yup.number().positive('!!! >0 !!!').required('Required'),
});

export const CardForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        img: '',
              desc: '',
        category: 'flowers',
              price: 0,
        quantity: 0,
      }}
      validationSchema={CardSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
          actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Назва рослини
          <Field name="title" />
          <ErrorMessage name="title" component="div" />
        </FormField>
        <FormField>
          Фото рослини
          <Field name="img" />
          <ErrorMessage name="img" component="div" />
        </FormField>
        <FormField>
          Короткий опис
          <Field name="desc" />
          <ErrorMessage name="desc" component="div" />
              </FormField>
              <FormField>
          Категорія
          <Field as="select" name="category">
             <option value="flowers">flowers</option>
             <option value="tree">tree</option>
             <option value="brush">brush</option>
           </Field>
          <ErrorMessage name="category" component="div" />
        </FormField>
        <FormField>
          Ціна
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" />
              </FormField>
              <FormField>
          Кількість рослин в наявності
          <Field name="quantity" type="number" />
          <ErrorMessage name="quantity" component="div" />
        </FormField>
        <button type="submit">Save card</button>
      </Form>
    </Formik>
  );
};
