import * as React from 'react';
import {Card, CardContent, Stack, Typography} from '@mui/material';


export default function StatCard({label, value, icon}) {
    return (
        <Card elevation={1}>
            <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                    <div>{icon}</div>
                    <div>
                        <Typography variant="body2" color="text.secondary">{label}</Typography>
                        <Typography variant="h6" fontWeight={700}>{value}</Typography>
                    </div>
                </Stack>
            </CardContent>
        </Card>
    );
}