import { makeStyles, Theme } from "@material-ui/core";
import styled from "styled-components";

type PlaylistFiltersContainerProps = {
  isOpen: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  input: {
    margin: '20px 0'
  },
  searchTitle: {
    fontSize: '16px',
    fontWeight: 400,
    textAlign: 'center'
  },
  logoContainer: {
    display: 'flex',
    justifyItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  sidebarLogo: {
    width: '140px',
    margin: '10px auto',
  }
}));

export const SidebarContainer = styled.aside<PlaylistFiltersContainerProps>`
  width: 350px;
  margin-right: 30px;
  height: 75vh;
  padding: 20px;

  background-color: #f3f3f3;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  @media screen and (max-width: 990px) {
    position: absolute;

    top: 0;
    left: 0;
    z-index: 1000;

    transition: all 0.3s;
    height: 540px;
    width: 60%;
    transform: ${ ({ isOpen }) => isOpen ? 'translate(0, 0)' : 'translate(-400px, -600px)' };
  }
`;
