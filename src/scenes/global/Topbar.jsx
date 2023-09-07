import { Box, IconButton, useTheme, InputBase } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton
          type="button"
          sx={{ p: 1 }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <SettingsOutlined />
        </IconButton>
        <IconButton type="button" sx={{ p: 1 }}>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
