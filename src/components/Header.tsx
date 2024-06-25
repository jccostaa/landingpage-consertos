import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';

import logo from "./../assets/logo.png"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#c51321", paddingX: "100px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar alt='Logotipo Consertos' src={logo} sx={{ width: "200px", height: "40px", margin: "0.2rem" }} variant='square' />
          </Box>
          <IconButton color="inherit" sx={{ fontWeight: "600", fontSize: "16px" }} href="tel:+513610142"> <SupportAgentIcon /> 51 3561-0142</IconButton>
          <IconButton color="inherit" sx={{ fontWeight: "600", fontSize: "16px" }} href="https://wa.me/+5551997750061" > <WhatsAppIcon /> 51 99775-0061</IconButton>
          <IconButton color="inherit" component="a" href='https://www.facebook.com/consertosrefrigeracao' sx={{ fontWeight: "600", fontSize: "16px" }}> <FacebookIcon /> Facebook</IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}