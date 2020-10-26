import React, { memo, useCallback, useEffect, useState } from "react";
import { StyledBadge, useStyles } from "./styles";
import brand from '../../assets/img/svg/spotifood_logo_aside_white.svg';

import useAuthentication from "../../hooks/useAuthentication";
import { AppBar, Avatar, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { User } from "../../interfaces";

export type Props = {
  userInfo: User,
  openSidebar: () => void;
}

const Header: React.FC<Props> = ({ userInfo, openSidebar }) => {
  const classes = useStyles();

  const { logout } = useAuthentication();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(window.innerWidth <= 990);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const avatarLogoBrandListener = useCallback(() => {
    window.addEventListener('resize', () => {
      setShowMenuIcon(window.innerWidth <= 990);
    })
  }, [setShowMenuIcon]);

  useEffect(() => {
    avatarLogoBrandListener();
  }, [avatarLogoBrandListener])

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        { showMenuIcon
          ? (<i className={`${classes.toolbarMenuIcon} material-icons`}
                onClick={ openSidebar }>menu</i>)
          : (<img className={classes.toolbarBrand} src={ brand } alt='logo aside'/>)
        }
        <nav className={classes.avatarContainer}>
          <Typography variant="h3" className={classes.avatarName}>{ userInfo.displayName }</Typography>
          <StyledBadge
            overlap="circle"
            anchorOrigin={ {
              vertical: 'bottom',
              horizontal: 'right',
            } }
            variant="dot"
          >
            <Avatar
              src={ userInfo.avatar }
              alt='User Avatar'
              onClick={ handleClick }
              className={ classes.avatar }
            />
          </StyledBadge>
          <Menu
            id="header-menu"
            anchorEl={ anchorEl }
            keepMounted
            open={ Boolean(anchorEl) }
            onClose={ handleClose }
          >
            <MenuItem
              onClick={ logout }>Sair</MenuItem>
          </Menu>
        </nav>
      </Toolbar >
    </AppBar>
  );
}

export default memo(Header);
