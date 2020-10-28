import React, { memo } from "react";
import Layout from "../../components/Layout";
import PlaylistInput from "./components/PlaylistInput";
import { usePlaylists } from "../../hooks/usePlaylists";
import PlaylistList from "./components/PlaylistList";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

const PlayListsPage: React.FC = () => {
  const classes = useStyles();
  const { playlists } = usePlaylists();

  return (
    <Layout>
      <>
        <Box className={classes.container}>
          <PlaylistInput />
          <Box className={classes.cardListContainer}>
            <PlaylistList playlists={ playlists } />
          </Box>
        </Box>
      </>
    </Layout>
  )
}

export default memo(PlayListsPage);
