import React from 'react'
import Grid from '@material-ui/core/Grid'
import CategoryCardContaner from './CategoryCardContainer'
import './categoryCard.css'

function CategoryCardList() {
    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' name='Amazon Basics'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg' name='Electronics'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg' name='Beauty Picks'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg' name='Computer And Accesories'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' name='Get Fit At Home'/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CategoryCardContaner imgSrc='https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg' name='Deals And Promotions'/>
            </Grid>
        </Grid>
    )
}

export default CategoryCardList
