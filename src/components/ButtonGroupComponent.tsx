import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { increment, clear, toggleDisable } from '../store/counterSlice';

const ButtonGroupComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { count, isDisabled } = useSelector((state: RootState) => state.counter);

  const handleClick = () => {
    dispatch(increment());
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleToggleDisable = () => {
    dispatch(toggleDisable());
  };

  return (
    <ButtonGroup
      orientation="vertical"
      variant="outlined"
      sx={{
        '& .MuiButton-root': {
          textTransform: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          padding: '12px 48px',
        },
      }}
    >
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        sx={{
          color: isDisabled ? 'text.disabled' : '#1976d2',
        }}
      >
        CLICK:{count}
      </Button>
      <Button
        onClick={handleClear}
        sx={{ color: '#1976d2' }}
      >
        CLEAR
      </Button>
      <Button
        onClick={handleToggleDisable}
        sx={{ color: '#d32f2f' }}
      >
        {isDisabled ? 'ABLE' : 'DISABLE'}
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
