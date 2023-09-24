import { Box, Typography, useTheme } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { ExpandMore } from '@mui/icons-material';

import { Header } from '../../components';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What can I do with the calendar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Add event, drag and drop events, adjust time frame for events etc
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            totam dolorem aliquam harum atque neque tempora odio, quod suscipit
            obcaecati voluptates natus dolorum sint fugit facilis asperiores
            nisi. Eveniet, molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            totam dolorem aliquam harum atque neque tempora odio, quod suscipit
            obcaecati voluptates natus dolorum sint fugit facilis asperiores
            nisi. Eveniet, molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
