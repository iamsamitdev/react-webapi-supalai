import React from 'react'
import { Box, ThemeProvider } from "@mui/material"
import theme from "../../config/theme"

const AuthLayout = ({ children }: any) => {
  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <Box>
              {children}
            </Box>
        </ThemeProvider>
    </React.Fragment>
  )
}

export default AuthLayout