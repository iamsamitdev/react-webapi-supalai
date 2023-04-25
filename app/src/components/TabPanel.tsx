import { Box } from "@mui/material"

interface TabPanelProps {
    children: React.ReactNode
    value: number
    index: number
    mt?: number
}

function TabPanel({ children, value, index, mt = 4 }: TabPanelProps) {
    return (
      <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
        {value === index && <Box sx={{ mt }}>{children}</Box>}
      </div>
    )
}

export default TabPanel