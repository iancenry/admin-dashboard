import { Typography, Box, useTheme } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';

import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';

import { tokens } from '../../theme';
import { Header } from '../../components';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //field should match database name(mockData for this) and headerName will be displayed in the app in place of it
  //flex 1(like CSS), cellClassName for css, renderCell to give a custom look
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column__cell',
    },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of Invoice Balances" />
      {/* Target datagrid classes from inspect in browser */}
      <Box
        m="40px 0 0 0"
        height="75svh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column__cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          //middle section
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
