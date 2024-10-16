import Imageandtext from "./imageandtext";
import AboutPage from './about';

import BakeryItemsList from './Bakeryitemlist';
function Home({ items, onAddToCart }) {
    return (
        <>
            <Imageandtext />
            <AboutPage />
            <BakeryItemsList items={items} onAddToCart={onAddToCart} />
        </>
    );
}

export default Home;