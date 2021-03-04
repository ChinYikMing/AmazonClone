import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
    gridItemStyle: {
        color: grey[300],
        lineHeight: 2.2
    }
})


function FooterList({ infos, title }) {
    const classes = useStyles();

    return (
        <>
            <Grid item >
                <Typography style={{color: 'white', fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </Grid>
            {
                infos.map((info, index) => 
                    <Grid item key={index} 
                          style={{fontSize: 13}} 
                          className={classes.gridItemStyle}
                    >
                        {info}
                    </Grid>
                )
            }
        </>
    )
}

export default FooterList
