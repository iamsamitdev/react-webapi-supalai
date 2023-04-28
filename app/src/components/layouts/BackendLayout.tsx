import React from "react"
import "../../App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { ProSidebarProvider } from "react-pro-sidebar"
import { Box, ThemeProvider } from "@mui/material"
import SideNav from "../../components/SideNav"
import AppHeader from "../../components/AppHeader"
import theme from "../../config/theme"

const BackendLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <AppHeader />
          <Box sx={styles.container}>
            <SideNav />
            <Box component={"main"} sx={styles.mainSection}>
              {children}
            </Box>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100% - 64px)",
  },
  mainSection: {
    p: 4,
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
}

export default BackendLayout
