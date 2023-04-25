import { Avatar, Box, Typography } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; 
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; 
import { Link } from "react-router-dom";

function SideNav() {
    const { collapsed } = useProSidebar()
    return <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Masoud" src="/assets/avatars/samitkk.jpg" />
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Samit Koyom</Typography> : null}
            {!collapsed ? <Typography variant="body2">Administrator</Typography> : null}
        </Box>

        <Menu
            menuItemStyles={{
                
            }}>
            <MenuItem active={window.location.pathname === "/"} component={<Link to="/" />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
            <MenuItem active={window.location.pathname === "/content"} component={<Link to="/content" />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Content </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/analytics"} component={<Link to="/analytics" />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Analytics </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/customization"} component={<Link to="/customization" />} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Customization </Typography></MenuItem >
        </Menu >
    </Sidebar >
}

export default SideNav;

const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}