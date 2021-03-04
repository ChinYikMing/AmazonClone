import React from 'react'
import { Grid } from '@material-ui/core'
import footerInfo from './footerInfo'
import FooterList from './FooterList'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    gridContainerStyle: {
        color: 'white',
        backgroundColor: '#232F3E',
        paddingLeft: 20
    },
    footerListStyle: {
        marginTop: 30,
    },
})

function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainerStyle}>
            <Grid
                item
                container
                direction="column"
                className={classes.footerListStyle}
                xs={7}
                sm={6}
                md={3}
            >
                <FooterList
                    infos={footerInfo.getToKnowUs.lists}
                    title={footerInfo.getToKnowUs.title}
                />
            </Grid>
            <Grid
                item
                container
                direction="column"
                className={classes.footerListStyle}
                xs={7}
                sm={6}
                md={3}
            >
                <FooterList
                    infos={footerInfo.makeMoneyWithUs.lists}
                    title={footerInfo.makeMoneyWithUs.title}
                />
            </Grid>
            <Grid
                item
                container
                direction="column"
                className={classes.footerListStyle}
                xs={7}
                sm={6}
                md={3}
            >
                <FooterList
                    infos={footerInfo.amazonPaymentProducts.lists}
                    title={footerInfo.amazonPaymentProducts.title}
                />
            </Grid>
            <Grid
                item
                container
                direction="column"
                className={classes.footerListStyle}
                xs={7}
                sm={6}
                md={3}
            >
                <FooterList
                    infos={footerInfo.letUsHelpYou.lists}
                    title={footerInfo.letUsHelpYou.title}
                />
            </Grid>
        </Grid>
    )
}

export default Footer
