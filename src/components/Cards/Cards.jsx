import React from 'react';
import styles from './Card.module.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid'

const CardComponent = () => (
    <Grid container spacing={3}>
        <Grid item>
            <Card>
                <CardContent>
                    fdfds
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card>
                <CardContent>
                    fdfds
                </CardContent>
            </Card>
        </Grid>
        <Grid item>
            <Card>
                <CardContent>
                    fdfds
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

export default CardComponent;