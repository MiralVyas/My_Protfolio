// src/components/Contact.tsx
import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const initialValues = { name: "", email: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Form data", values);
    // Handle form submission
  };

  return (
    <Container id="contact" sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", marginBottom: 4 }}
      >
        Contact Me
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Field
                name="name"
                as={TextField}
                label="Name"
                fullWidth
                margin="normal"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                name="message"
                as={TextField}
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                error={touched.message && !!errors.message}
                helperText={touched.message && errors.message}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: 2, background: "#e3cfb5" }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
