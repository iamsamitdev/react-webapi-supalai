import { Card, CardContent, Typography } from "@mui/material";

function LatestVideoCard(props : { sx?: any }) {
    return (<Card {...props}>
        <CardContent>
            <Typography>My Content</Typography>
        </CardContent>
    </Card>)
}

export default LatestVideoCard;

