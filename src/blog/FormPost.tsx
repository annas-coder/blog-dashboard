import React from 'react';
import { Container, Button, Typography, Box, Paper } from '@mui/material';
import { useCreateBlogPostMutation } from '@/services';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IBlogPost } from '@/Interface';
import CustomInput from '@/components/CustomInput';
import { useRouter } from 'next/router';
import { notify } from '@/components/CustomToaster';
import { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object({
  title: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Title must only contain letters')
    .required('Title is required'),
  author: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Author must only contain letters')
    .required('Author is required'),
  body: Yup.string()
    .required('Body is required'),
});

export function FormPost(){
  const router = useRouter()
  const [createBlogPost, { isLoading }] = useCreateBlogPostMutation();

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" color='text.primary' gutterBottom>
          Add New Blog Post
        </Typography>



        <Formik
          initialValues={{ title: '', author: '', body: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            const newPost: IBlogPost = {
              title: values.title,
              author: values.author,
              excerpt: values.body,
              date: Date.now().toLocaleString(),
              id: '',
              body: ''
            };
            try {
              await createBlogPost(newPost).unwrap();
              resetForm();
              notify.success({ message: 'post is successfully added.' });
              setTimeout(()=>{
                router.push("/")
              },500)
            } catch (err) {
              console.error('Failed to create post:', err);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <CustomInput
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.title && errors.title)}
                errorMessage={touched.title && errors.title}
              />

              <CustomInput
                label="Author"
                name="author"
                value={values.author}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.author && errors.author)}
                errorMessage={touched.author && errors.author}
              />

              <CustomInput
                label="Body"
                name="body"
                value={values.body}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.body && errors.body)}
                errorMessage={touched.body && errors.body}
                multiline
                rows={6}
              />

              <Box textAlign="center" mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
              <Toaster/>

      </Paper>
    </Container>
  );
};