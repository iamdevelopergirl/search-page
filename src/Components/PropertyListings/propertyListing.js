import './property.css';
import Property from './property.js';

const convertPriceToNumberFormat = (price) => {
    return `€${Intl.NumberFormat().format(price)}`;
}

const getListing = (listingArray) => {
    if(listingArray === null){
        return <div></div>
    }
    return listingArray.listings.map((property) => {
        return <Property key={property._id} title={property.title.en} image={property["image"]} price={convertPriceToNumberFormat(property["price"])}/>
    });
}

function PropertyListing({propertyList}){
    return(    
        <section className="listing-container">
            {getListing(propertyList)}
        </section>
    )
}

export default PropertyListing;