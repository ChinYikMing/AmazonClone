import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import ProductContainer from './ProductContainer'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    paperStyle: {
        marginTop: 50,
        position: 'relative',
    },
    linkStyle: {
        fontSize: 17
    },
    gridItemStyle: {
        '&:hover': {
            cursor: 'pointer'
        },
        margin: 'auto'
    },
    previousButtonStyle: {
        position: 'absolute',
        top: 100,
    },
    nextButtonStyle: {
        position: 'absolute',
        right: 0,
        top: 100
    },
})

const scrollBarToRight = (className) => {
    const container = document.getElementsByClassName(className)[0];

    container.scrollLeft += 870;
}

const scrollBarToLeft = (className) => {
    const container = document.getElementsByClassName(className)[0];

    container.scrollLeft -= 870;
}

function ProductList({ urls, className, title }) {
    const classes = useStyles();
    const [appear, setAppear] = useState(false);

    return (
        <Paper elevation={5}
            className={classes.paperStyle}
            onMouseEnter={() => setAppear(!appear)}
            onMouseLeave={() => setAppear(!appear)}
        >
            <Typography variant="h6">
                {title}
                <Link href='#' className={classes.linkStyle}> See more</Link>
            </Typography>
            {
                appear ? (
                    <IconButton
                        color="primary"
                        className={classes.previousButtonStyle}
                        onClick={() => scrollBarToLeft(className)}
                    >
                        <ArrowBackIosIcon fontSize="large" />
                    </IconButton>
                ) : null
            }

            <Grid container
                className={`productList ${className}`}
                wrap="nowrap"
                style={{ overflow: appear ? 'auto' : 'hidden' }}
            >
                {
                    urls.map((url, index) =>
                        <Grid item key={index} className={classes.gridItemStyle}>
                            <ProductContainer imgSrc={url} />
                        </Grid>
                    )
                }
            </Grid>
            {
                appear ? (
                    <IconButton
                        color="primary"
                        className={classes.nextButtonStyle}
                        onClick={() => scrollBarToRight(className)}
                    >
                        <ArrowForwardIosIcon fontSize="large" />
                    </IconButton>
                ) : null
            }

        </Paper>
    )
}

export default ProductList
