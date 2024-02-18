import StarsItem from "../StarsItem/StarsItem";



function ItemCard(props) {

    let {title, price, img, rate} = props


    return ( 
        <div className="card">
            <img className="img" src={img} alt=""/>
            <h1 className="title">{ title }</h1>
            <h2 className="price">{ price } $</h2>
            <StarsItem rate={rate}/>
        </div>
     );
}

export default ItemCard;