import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

type LoaderProps = {
  showLoading: boolean;
}

const FullscreenLoader: React.FC<LoaderProps> = ({ showLoading }) => {

  const classes = useStyles();

  return showLoading
    ? <Box className={classes.container}>
        <CircularProgress size={ 150 }/>
      </Box>
    : <></>
}

export default FullscreenLoader;
