import { AppBar, Button, SvgIcon, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { ReactComponent as logo } from '../../assets/logo_pago_pa_mini.svg';
import { CONFIG } from '../../config/env';
import SubHeader from './subHeader/SubHeader';

type HeaderProps = {
  /** if true, it will render an other toolbar under the Header */
  withSecondHeader: boolean;
  /** The function to be invoked when pressing the rendered logout button, if not defined it will redirect to the logout page, if setted to null it will no render the logout button. It's possible to modify the logout path changing the value in CONFIG.logout inside the index.tsx file */
  onExitAction?: (() => void) | null;
  /** If withSecondHeader is true, this component will be rendered at the end of the secondary toolbar */
  subHeaderChild?: React.ReactNode;
};

/** SelfCare Header component */
const Header = ({
  withSecondHeader,
  onExitAction = () => window.location.assign(CONFIG.URL_FE.LOGOUT),
  subHeaderChild,
}: HeaderProps) => (
  <Fragment>
    <AppBar
      position="relative"
      sx={{
        alignItems: 'center',
        height: '48px',
        backgroundColor: 'primary.dark',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ width: { xs: '100%', lg: '90%', minHeight: '48px !important' } }}>
        <SvgIcon component={logo} viewBox="0 0 80 24" sx={{ width: '80px' }} />
        {onExitAction !== null ? (
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <Button
              variant="contained"
              sx={{ width: '88px', backgroundColor: '#004C99', height: '32px' }}
              onClick={onExitAction}
            >
              Esci
            </Button>
          </Box>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
    {withSecondHeader === true ? <SubHeader>{subHeaderChild}</SubHeader> : ''}
  </Fragment>
);

export default Header;
