import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  loginContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  logoContainer: {
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    width: '100vw'
  },
  loginLogo: {
    width: '200px',
    margin: '0 auto'
  },
  loginButtonContainer: {
    width: '100vw',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  messageBeforeLogin: {
    textAlign: 'center',
    fontWeight: 100,
    fontSize: '1.5rem'
  },
  loginToContinue: {
    fontSize: '1.3rem',
    textAlign: 'center',
    fontWeight: 100
  },
  loginButton: {
    width: '325px',
    margin: '20px 0'
  },
  signupLink: {
    marginTop: '10px'
  }
}));
