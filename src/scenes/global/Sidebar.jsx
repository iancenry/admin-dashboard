import { useState } from 'react';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import './scss/styles.scss';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from '@mui/icons-material';

const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;
