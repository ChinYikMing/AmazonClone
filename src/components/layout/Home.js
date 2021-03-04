import React, { useState, useEffect } from 'react'
import CategoryCardList from '../categoryCard/CategoryCardList'
import ProductList from '../productSlideBar/ProductList'
import { products }  from '../data/slideBarProducts'
import { backgroundImages } from '../data/homeBackgroundImages'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Footer from '../footer/Footer'

const useStyles = makeStyles({
    backToTopButtonStyle: {
        marginTop: 20,
        backgroundColor: '#232F3E',
        color: 'white',
        fontSize: 13
    }
})

const backTotopClickHandle = () => {
    window.scrollTo(0, 0);
}

function Home() {
    const classes = useStyles();
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const backgroundImagesLength = 6;

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImageIndex(prevIndex => (prevIndex + 1) % (backgroundImagesLength))
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="home-container">
                <img className="home-background-image" src={backgroundImages[backgroundImageIndex]} alt="background" />
                <CategoryCardList />
                <ProductList urls={products.menShirt.urls}
                    className={products.menShirt.className}
                    title={products.menShirt.title} />

                <ProductList urls={products.toy.urls}
                    className={products.toy.className}
                    title={products.toy.title} />

                <ProductList urls={products.bestSellersInKitchen.urls}
                    className={products.bestSellersInKitchen.className}
                    title={products.bestSellersInKitchen.title} />

                <ProductList urls={products.mustHaveWirelessProducts.urls}
                    className={products.mustHaveWirelessProducts.className}
                    title={products.mustHaveWirelessProducts.title} />

                <ProductList urls={products.topBeautyAndPersonalCareProducts.urls}
                    className={products.topBeautyAndPersonalCareProducts.className}
                    title={products.topBeautyAndPersonalCareProducts.title} />

                <ProductList urls={products.bestSellersInBaby.urls}
                    className={products.bestSellersInBaby.className}
                    title={products.bestSellersInBaby.title} />

                <ProductList urls={products.popularGiftsInBaby.urls}
                    className={products.popularGiftsInBaby.className}
                    title={products.popularGiftsInBaby.title} />
            </div>
            <Button className={classes.backToTopButtonStyle}
                variant="contained"
                fullWidth
                onClick={() => backTotopClickHandle()}>
                Back to top
            </Button>
            <Footer />
        </>
    )
}

export default Home
