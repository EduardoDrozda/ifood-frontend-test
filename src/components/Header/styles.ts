import {
  Badge,
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        width: '90%'
      }
    },
    toolbarBrand: {
      width: '140px',
      marginBottom: '5px'
    },
    toolbarMenuIcon: {
      fontSize: '2.1rem',
      cursor: 'pointer'
    },
    avatarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        padding: '10px 0'
      }
    },
    avatar: {
      '&:hover': {
        cursor: 'pointer'
      },
    },
    avatarName: {
      fontSize: '1rem',
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  }),
);

export const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${ theme.palette.background.paper }`,
      bottom: 0,
      top: 0,
      '&::after': {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);
