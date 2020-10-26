import React from "react";
import {
  useStyles
} from "./styles";
import spotifood_logo_with_name
  from '../../assets/img/svg/spotifood_logo_with_name.svg';
import useSpotifyAccountUrl from "../../hooks/useSpotifyAccountUrl";
import { Box, Button, Link, Typography } from "@material-ui/core";

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const { spotifyAccountUrl, spotifyLoginUrl } = useSpotifyAccountUrl();

  const handleButtonLogin = (): void => {
    window.location.href = spotifyLoginUrl!;
  }

  return (
    <Box className={classes.loginContainer}>
      <section className={classes.logoContainer}>
        <img
          className={classes.loginLogo}
          src={ spotifood_logo_with_name }
          alt="logo Site"
          />
      </section>
      <section className={classes.loginButtonContainer}>
        <Typography variant="h2" className={classes.messageBeforeLogin}>
          Hello, we know you are hungry for music, but from
          here you must login with your spotify account.</Typography>

        <Typography variant="h2" className={classes.loginToContinue}>
          Click on the link below to login.</Typography>

        <Button
          className={classes.loginButton}
          size="large"
          variant="contained"
          color="primary"
          onClick={ handleButtonLogin }
        >
          Click here to sign in
        </Button>
        <Link className={classes.signupLink} href={ spotifyAccountUrl } target="_blank">
          Don't have a Spotify account? Click here and sign up now
        </Link>
      </section>
    </Box>
  );
}

export default LoginPage;
