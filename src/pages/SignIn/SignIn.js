import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-apollo-hooks';
import { object, string } from 'yup';
import { Button } from '~/shared/elements';
import { Text } from '~/shared/forms';
import { setAuthToken } from '~/utils/user-utils';
import { SIGN_IN_MUTATION } from '~/graphql/auth/mutations';
import './SignIn.scss';

const validationSchema = object().shape({
  email: string()
    .email('Invalid email')
    .required('Required'),
  password: string().required('Password is required')
});

const SignIn = () => {
  const signIn = useMutation(SIGN_IN_MUTATION);

  async function submit(data, { setSubmitting, setErrors }) {
    const { email, password } = data;
    setSubmitting(true);

    try {
      const {
        data: {
          signIn: { token, errors }
        }
      } = await signIn({ variables: { email, password } });
      if (errors && errors.length) {
        setErrors({ api: errors[0] });
      } else {
        setAuthToken(token);
      }
    } catch (e) {
      // TODO: Error logger.
      setErrors({ api: e.message });
    }

    return setSubmitting(false);
  }

  return (
    <div className="sign-in">
      <div className="form">
        <h1>My Site</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={submit}
          render={({ errors, isSubmitting }) => (
            <Form>
              <Text
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address..."
                data-test="email"
              />
              <br />

              <Text
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Password..."
                data-test="password"
              />
              <br />

              {errors.api && <div>{errors.api}</div>}

              <Button
                type="primary"
                htmlType="submit"
                disabled={isSubmitting}
                data-test="button-submit"
                style={{
                  margin: '10px auto 20px auto',
                  width: '150px',
                  height: '38px'
                }}
              >
                Sign In
              </Button>
            </Form>
          )}
        />
        <p>
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
        <p>
          <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
