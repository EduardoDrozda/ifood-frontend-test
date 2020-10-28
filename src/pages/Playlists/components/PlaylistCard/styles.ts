import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    marginTop: '20px',
    position: 'relative'
  },
  cardImage: {
    maxWidth: '100%',
    border: '4px solid #fff',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',

    '&:hover': {
      border: `4px solid ${theme.palette.primary.main}`
    },
    [theme.breakpoints.down('md')]: {
      width: '85vw'
    }
  },
  cardDescription: {
    position: 'absolute',
    bottom: '9px',
    height: '40px',
    padding: '15px',
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#000',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
    width: '96%',
    left: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
