import { connect } from 'react-redux';
import { Header, Button, Anchor, Nav, Box } from 'grommet';
import { Home, Login, Logout, Projects, UserAdd } from 'grommet-icons';

import { pageChange } from '../../actions';
import { logout } from './actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickHandlerLogout: () => dispatch(logout()),
  onClickHandler: (page) => dispatch(pageChange(page)),
});

function Navigation({ onClickHandler, isLogged, onClickHandlerLogout }) {
  return (
    <Header justify="around">
      <Button
        disabled={isLogged ? false : true}
        icon={<Home />}
        hoverIndicator
        onClick={() => onClickHandler('personal')}
      />
      <Box direction="row">
        <Nav direction="row" pad="small">
          <Anchor
            onClick={() => onClickHandler('main')}
            icon={<Projects />}
            hoverIndicator
          />
          {isLogged ? (
            <Anchor
              onClick={() => {
                onClickHandlerLogout();
                onClickHandler('main');
              }}
              icon={<Logout />}
              hoverIndicator
            />
          ) : (
            <>
              <Anchor
                onClick={() => onClickHandler('login')}
                icon={<Login />}
                hoverIndicator
              />
              <Anchor
                onClick={() => onClickHandler('register')}
                icon={<UserAdd />}
                hoverIndicator
              />
            </>
          )}
        </Nav>
      </Box>
    </Header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
