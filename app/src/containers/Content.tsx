import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react"
import TabPanel from "../components/TabPanel"

function Content() {
    const [value, setValue] = useState(0)

    const handleChange = (_event: any, newValue: any) => {
        setValue(newValue);
    };
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Content</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Videos" id='tab-0' />
                <Tab label="Live" id='tab-1' />
                <Tab label="Posts" id='tab-2' />
                <Tab label="Playlists" id='tab-3' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <p>vido content</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <p>live content</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <p>post content</p>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <p>playlist content</p>
        </TabPanel>
    </Box>
}

export default Content;

const styles = {
    pageTitle: {
        mb: 2
    },
    videoThumbnail: {
        width: 120,
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    videoDescription: {
        fontSize: '0.7rem',
        color: 'neutral.normal',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    videoDetails: {
        ml: 2
    },
    videoColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    }

}

