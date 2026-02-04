import ButtonGroupComponent from '../components/ButtonGroupComponent';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        gap: 4,
      }}
    >
      <ButtonGroupComponent />
      <Link to="/chart" style={{ textDecoration: 'none' }}>
        <Typography color="primary">前往圖表頁面 →</Typography>
      </Link>
    </Box>
  );
}

export default HomePage;
