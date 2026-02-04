import ButtonGroupComponent from './components/ButtonGroupComponent';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <ButtonGroupComponent />
    </Box>
  );
}

export default App;
