import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {IUser} from "../api/users";

interface UserProps extends Omit<IUser, 'id'> {

}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export function UserCard({login, email, createdAt}: UserProps) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <span>User name</span>
                    <span>{login}</span>
                </Typography>
                <Typography variant="h2" component="h2">
                    <span>User email</span>
                    <span>{email}</span>
                </Typography>
                <Typography variant="h2" component="p">
                    <span>When created </span>
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}