//import NextNProgress from 'nextjs-progressbar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
  return (
    // <NextNProgress />
    // <div>loading.........</div>
    <Box sx={{ width: '100%' }}>
    <LinearProgress color="inherit" />
  </Box>
  )
}

export default Loading