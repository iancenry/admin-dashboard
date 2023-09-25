import { Box } from '@mui/material';
import { Header, PieChart } from '../../components';

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75svh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
