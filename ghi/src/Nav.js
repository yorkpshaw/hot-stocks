import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import { LoginForm } from './accounts/LoginForm';
import { LargeLoading } from './common/Loading';
import { useGetTokenQuery, useLogOutMutation } from './rtk-files/authApi';
import { useGetStocksQuery } from './rtk-files/stocksApi';
import { useGetNewsItemsQuery } from './rtk-files/newsItemsApi';
import { ErrorNotification } from './common/ErrorNotification';

const drawerWidth = 240;

const upper_data = [
  { name: "Explore", icon: <LocalFireDepartmentOutlinedIcon />, link: "/" },
  { name: "Search", icon: <SearchOutlinedIcon />, link: "/search" },
  { name: "Saved", icon: <TurnedInNotOutlinedIcon />, link: "/saved" },
  { name: "Portfolio", icon: <WorkOutlineOutlinedIcon />, link: "/portfolio" },
];

const lower_data = [
  { name: "About", icon: <HelpOutlineOutlinedIcon />, link: "/about" },
];


function LogoutListItem() {
  const [logOut] = useLogOutMutation();

  return (
    <ListItem button onClick={logOut}>
      <ListItemIcon><LogoutOutlinedIcon /></ListItemIcon>
      <ListItemText primary='Logout' />
    </ListItem>
  );
}

export default function HotStocksNav({ children }) {

  const { data: token, isLoading: tokenLoading, isError: tokenError } = useGetTokenQuery();
  const { data: stocksData, isLoading: stocksLoading } = useGetStocksQuery();
  const { data: newsItemsData, isLoading: newsItemsLoading } = useGetNewsItemsQuery();

  const getList = (data) => (
    <div style={{ width: 250 }}>
      {data.map((item, index) => (
        <ListItem button key={index} component={Link} to={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <>
      {tokenLoading || stocksLoading || newsItemsLoading ?
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}>
          <LargeLoading />
        </Box>
        :
        tokenError ?
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}>
          <ErrorNotification error={tokenError}/>
        </Box>
        :
        stocksData.stocks === null || newsItemsData.news_items === null ?
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}>
          <ErrorNotification error={'Too hot right now! Give us some time to cool down.'}/>
        </Box>
        :
        token ?
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="permanent"
              anchor="left">
              <Toolbar />
              <Divider />
              <List>
                {getList(upper_data)}
              </List>
              <Divider />
              <List>
                {getList(lower_data)}
                <LogoutListItem />
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
              <Toolbar />
              {children}
            </Box>
          </Box> :
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <LoginForm />
          </Box>
      }
    </>
  );
}
