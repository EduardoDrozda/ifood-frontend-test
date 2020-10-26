import React, { memo } from "react";
import { useStyles } from "./styles";
import { usePlaylists } from "../../../../hooks/usePlaylists";
import TextInput from "../../../../components/Inputs/TextInput";
import { Box } from "@material-ui/core";

const PlaylistInput: React.FC = () => {
  const { inputContaner } = useStyles();

  const { setSearch } = usePlaylists();

  const handleChange = ({ target }: React.ChangeEvent<{ value: unknown }>) => {
    const value = target.value as string;
    setSearch(value);
  };

  return (
    <Box className={ inputContaner }>
      <TextInput
        name="Insert your favorite playlist"
        size="small"
        onChange={ handleChange }
      />
    </Box>
  );
}

export default memo(PlaylistInput);
