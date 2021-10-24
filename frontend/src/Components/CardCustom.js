import React from 'react'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
function CardCustom({intent_name,intent_display_name,intent_action}) {
    return (
            <Grid item xs={12} sm={6} md={2}>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="data:image/jpeg;base64,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"
                        alt="bot logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                        Intent display name: {intent_display_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Intent name: {intent_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Action: {intent_action}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default CardCustom
