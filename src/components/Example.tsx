import { Box } from '@mui/material';
import React from 'react';
import ReactLoading from 'react-loading';

interface ExampleProps {
  type: string;
  color: string;
}

const Example = ({ type, color }: ExampleProps) => {
  return (
    <Box sx={{marginLeft:75}}>
      <ReactLoading type={type} color={color} height={90} width={90} />
    </Box>
  );
};

export default Example;
