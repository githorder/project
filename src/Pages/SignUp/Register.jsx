import { connect } from 'react-redux';

import {
  grommet,
  Grommet,
  Box,
  Form,
  FormField,
  TextInput,
  Heading,
  Button,
} from 'grommet';
import { deepMerge } from 'grommet/utils';

import { writeName, writeEmail, writePassword, submit } from './actions';

const customTheme = deepMerge(grommet, {
  formField: {
    border: {
      color: 'border',
      side: 'all',
    },
    label: {
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        horizontal: 'none',
      },
    },
    round: '2px',
  },
});

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeHandlerName: (e) => dispatch(writeName(e.target.value)),
  onChangeHandlerEmail: (e) => dispatch(writeEmail(e.target.value)),
  onChangeHandlerPassword: (e) => dispatch(writePassword(e.target.value)),
  onSubmitHandler: (userData) => {
    dispatch(submit(userData));
  },
});

function Register({
  name,
  email,
  password,
  onChangeHandlerName,
  onChangeHandlerEmail,
  onChangeHandlerPassword,
  onSubmitHandler,
}) {
  return (
    <Grommet theme={customTheme}>
      <Box
        height="100%"
        background="light-2"
        align="center"
        pad={{ vertical: 'large' }}
      >
        <Heading size="medium" level="3">
          Register
        </Heading>
        <Form>
          <Box align="center">
            <Box
              responsive
              border
              gap="medium"
              pad="large"
              width="80%"
              background="light-1"
            >
              <FormField htmlFor="name" name="name" label="Name">
                <TextInput
                  onChange={onChangeHandlerName}
                  value={name}
                  id="name"
                  name="name"
                  placeholder="Enter a name"
                />
              </FormField>
              <FormField htmlFor="email" name="email" label="Email">
                <TextInput
                  value={email}
                  onChange={onChangeHandlerEmail}
                  id="email"
                  name="email"
                  placeholder="Enter an email"
                />
              </FormField>
              <FormField htmlFor="password" name="password" label="Password">
                <TextInput
                  onChange={onChangeHandlerPassword}
                  value={password}
                  id="password"
                  name="password"
                  placeholder="Enter a password"
                />
              </FormField>
              <Box justify="center" direction="row" gap="medium">
                <Button
                  onClick={() => onSubmitHandler({ name, email, password })}
                  type="submit"
                  primary
                  label="Register"
                />
              </Box>
            </Box>
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
