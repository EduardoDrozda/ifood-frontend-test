import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>({
  container: {
    height: '70vh',
    width: '75%',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    },
  },
  cardListContainer: {
    display: 'grid',
    gridGap: '16px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    [theme.breakpoints.down('md')]: {
      gridGap: '24px'
    },
  }
}));
