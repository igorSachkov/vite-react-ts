import {Button} from '@mui/material';
import {ShoppingCartRounded} from '@mui/icons-material';
import {Link} from 'react-router-dom';


const MainPage = () => {
  return (
    <>
      <span>main page</span>
      <div>
        <Button variant='outlined' startIcon={<ShoppingCartRounded />} href='https://miro.com/app/board/uXjVNy71lPE=/' target='_blank'>
          First Task
        </Button>
        <Button variant='outlined' startIcon={<ShoppingCartRounded />} to='/second-task' component={Link}>
          Second Task
        </Button>
      </div>

    </>
  );
};

export default MainPage;
