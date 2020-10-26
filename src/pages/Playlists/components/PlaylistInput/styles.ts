import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  inputContaner: {
    width: '59vw',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}));
