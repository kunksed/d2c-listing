import React from "react"
import StarRatings from 'react-star-ratings'; // https://www.npmjs.com/package/react-star-ratings
import './storecard.css'



export default (props) => {
        return(
                <div class="card">
                    <div style={{"text-align" : "center"}}>
                        <span class="industry">
                        {props.StoreData.Industry}
                        </span>
                    </div>
                    
                    <div class="logo">
                        <img style={{"height" : "10vh"}} src={props.StoreData.Logo.map(data => data.url)} alt ={props.StoreData.Name}></img>
                    </div>
                    
                    <div class="rating">
                       <StarRatings
                            rating={2.5}
                            starRatedColor="#F5A623"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                            name='rating'
                        />
                    </div>
                    
                    <div class="name">
                        <span> {props.StoreData.Name} </span>
                    </div>
                        
                    <div class="category">
                        {props.StoreData.Categories.slice(0, 3).map(cat => 
                            <span> {cat} </span>)}
                        
                    </div>
                </div>
        );
      }
