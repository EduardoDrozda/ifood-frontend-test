import React, { memo, useLayoutEffect, useState } from "react";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../Header";
import PlayListFilters from "../Sidebar";
import { Background } from "../../styles/Background";
import { useStyles } from "./styles";
import { Box, LinearProgress } from "@material-ui/core";
import useFilters from "../../hooks/useFilters";

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const userInfo = useUserInfo();
  const { isLoading } = useFilters();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSidebar = (): void => {
    setIsOpen(!isOpen);
  }

  const closeSidebar = (): void => {
    setIsOpen(false);
  }

  useLayoutEffect(() => {
    const addPlaylistListener = () => {
      const playListContainer = document.getElementById('container');
      if (playListContainer) {
        playListContainer!.addEventListener('click', closeSidebar);
      }
    }
    addPlaylistListener();
  }, [isOpen])

  return (
    <Background>
      { isOpen && (<Box className={classes.sidebarMobile} id="container"/>) }
      <Header userInfo={ userInfo! } openSidebar={ openSidebar }/>
      { isLoading && (<LinearProgress color="secondary"/>) }
      <Box className={classes.content}>
        <PlayListFilters isOpen={ isOpen }/>
        { children }
      </Box>
    </Background>
  );

}

export default memo(Layout);
