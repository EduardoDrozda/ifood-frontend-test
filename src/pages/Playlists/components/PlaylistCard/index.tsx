import { Box } from '@material-ui/core';
import React, { memo } from 'react';
import {
  useStyles
} from "./styles";

type Props = {
  imageUrl: string;
  name: string;
  playlistUrl: string;
}

const PlaylistCard = ({ imageUrl, name, playlistUrl }: Props) => {

  const classes = useStyles();

  const openPlaylist = () => {
    window.open(playlistUrl, '_blank');
  };

  return  (
    <Box className={classes.cardContainer} onClick={openPlaylist}>
      <img className={classes.cardImage} src={ imageUrl } alt='Playlist'/>
      <Box className={classes.cardDescription} >
        { name }
      </Box>
    </Box >
  );
}

export default memo(PlaylistCard);
