import './Item.css';
import starImage from '../../../Airbnb_Experiences_Project_Images/Star1.png'


export default function Item(props){
    return (
        <div className="item-container">
            <div className="item-image">
                <img src={props.data.imageUrl} alt="" />
            </div>
            <div className="Item-details">
                <div className="detail1">
                    <span className="item-star-icon"><img src={starImage} alt="" /></span> <span className="item-rating">{props.data.itemRating}</span><span className="item-total-Votes">{props.data.itemTotalVotes}</span> . <span className="item-country">{props.data.itemCountry}</span>
                </div>
                <div className="detail2">
                    <h3 className="item-title">{props.data.itemTitle}</h3>
                </div>
                <div className="detail3">
                    <span className="item-from"></span><span className="item-price">{props.data.itemPrice}</span> / <span>Per Person</span>
                </div>
            </div>
        </div>
    );
}