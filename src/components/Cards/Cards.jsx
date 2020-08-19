import React from 'react';
import styles from './Card.module.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import CountUp from 'react-countup'

import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core';

const CardComponent = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={4}>
                    <Card className={styles.card}>
                        <CardContent>
                        <Typography color="textPrimary" >
                                Infected
                        </Typography>
                        <Typography variant="subtitle2" component="p" color="textSecondary" gutterBottom>
                                Number of active COVID-19 cases.
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            <CountUp start={0} end={confirmed.value-recovered.value-deaths.value} duration={1.5} separator="," />
                        </Typography>
                        <Divider />
                        <Typography variant="caption" display="block" gutterBottom>
                                last update:
                        <br />
                                {new Intl.DateTimeFormat("en-EN", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                }).format(new Date(lastUpdate))}
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={styles.card}>
                        <CardContent>
                            <Typography color="textPrimary">
                                    Recovered
                            </Typography>
                            <Typography variant="subtitle2" component="p" color="textSecondary" gutterBottom>
                                    Number of recovered people from COVID-19.
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                    <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
                            </Typography>
                            <Divider />
                            <Typography variant="caption" display="block" gutterBottom>
                                    last update:
                            <br />
                                    {new Intl.DateTimeFormat("en-EN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                    }).format(new Date(lastUpdate))}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={styles.card}>
                            <CardContent>
                                <Typography color="textPrimary">
                                        Deaths
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary" gutterBottom>
                                        Number of deaths coused by COVID-19.
                                </Typography>
                                <Typography variant="h5" component="h2" gutterBottom>
                                        <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
                                </Typography>
                                <Divider />
                                <Typography variant="caption" display="block" gutterBottom>
                                        last update:
                                <br />
                                        {new Intl.DateTimeFormat("en-EN", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(new Date(lastUpdate))}
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CardComponent;