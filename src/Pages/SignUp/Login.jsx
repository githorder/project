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

import { writeEmail, writePassword, login } from './actions';

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
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeHandlerEmail: (e) => dispatch(writeEmail(e.target.value)),
  onChangeHandlerPassword: (e) => dispatch(writePassword(e.target.value)),
  onSubmitHandler: (userData) => {
    dispatch(login(userData));
  },
});

function Login({
  email,
  password,
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
          Login
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
                  value={password}
                  onChange={onChangeHandlerPassword}
                  id="password"
                  name="password"
                  placeholder="Enter a password"
                />
              </FormField>
              <Box direction="row" justify="center" gap="medium">
                <Button
                  onClick={() => onSubmitHandler({ email, password })}
                  type="submit"
                  primary
                  label="Login"
                />
              </Box>
            </Box>
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
