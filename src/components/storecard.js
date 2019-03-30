import React from "react"
import StarRatings from 'react-star-ratings'; // https://www.npmjs.com/package/react-star-ratings


export default (props) => {
        return(
           <div>
            
            <span style = {{fontWeight : 'bold', fontSize : '30px'}}> 
                {props.StoreData.Name} 
            </span> 
            <StarRatings
                rating={2.403}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="gold"
            />

            <p> 
                {props.StoreData.Industry} 
            </p>

           </div>
        );
      }