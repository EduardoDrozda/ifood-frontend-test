import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: '85%',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  sidebarMobile: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: 999,
    overflow: 'hidden'
  }
}));

