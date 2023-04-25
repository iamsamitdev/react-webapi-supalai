import { Box } from "@mui/material"

interface ColorTextProps {
    color: string
    children: React.ReactNode
}

function ColorText({ color, children }: ColorTextProps) {
    return <Box sx={{ color }} component='span'>{children}</Box>
}

export default ColorText;