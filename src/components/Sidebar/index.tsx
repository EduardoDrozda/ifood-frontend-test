import React, { memo } from "react";
import {
  SidebarContainer,
  useStyles
} from "./styles";
import useFilters from "../../hooks/useFilters";
import FilterInput from "./components/FilterInput";
import brand from "../../assets/img/svg/spotifood_logo_aside_red.svg";
import { usePlaylists } from "../../hooks/usePlaylists";
import { Box, Typography } from "@material-ui/core";

type Props = {
  isOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {

  const classes = useStyles();

  const { locales, countries, timestamp, quantity, page } = useFilters();

  const { filter, setFilter } = usePlaylists();

  const handleChange = (id: string, value: string | number) => {
    if (setFilter) {
      const newFilter = {
        ...filter,
        [id]: value,
      };

      setFilter(newFilter);
    }
  };

  const buildFilters = () => {
    const filters = [
      locales,
      countries,
      timestamp,
      quantity,
      page
    ];

    return filters.map((filter, index) => (
      <Box
        className={ classes.input }
        key={ index }
      >
        <FilterInput
          { ...filter }
          onChange={ (value) => handleChange(filter.id!, value) }
        />
      </Box>
    ));
  }

  return (
    <SidebarContainer isOpen={ isOpen }>
      { isOpen && (
        <Box className={classes.logoContainer}>
          <img className={classes.sidebarLogo} src={ brand } alt='logo aside'/>
        </Box>
      ) }
      <Typography
        variant="h3"
        className={classes.searchTitle}
        >
          Advanced search
        </Typography>
      { buildFilters() }
    </SidebarContainer>
  );
}

export default memo(Sidebar);
