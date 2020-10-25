import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'fixed',
      zIndex: 1,
      background: 'rgba(0, 0 , 0, 0.8)',
      width: '100vw',
      height: '100vh'
    }
  }),
);
