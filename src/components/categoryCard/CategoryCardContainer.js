import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    media: {
        backgroundSize: 'cover',
        height: 350
    },
    cardActionAreaStyle: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    cardStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        zIndex: 100
    }
});

function CategoryCardContainer({ imgSrc, name }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardStyle}>
            <Typography variant="h5">
                {name}
            </Typography>
            <CardActionArea className={classes.cardActionAreaStyle}>
                <Link to={`/category/${name}`}>
                    <CardMedia
                        className={classes.media}
                        image={imgSrc}
                        title={name}
                    />
                </Link>
            </CardActionArea>
            <CardActions>
                <Link to={`/category/${name}`}>Shop now</Link>
            </CardActions>
        </Card>
    )
}

export default CategoryCardContainer
