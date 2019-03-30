import React from "react"

export default (props) => {
        return(
           <div>
            
            <span style = {{fontWeight : 'bold', fontSize : '30px'}}> 
                {props.StoreData.Name} 
            </span> 
            <p> {props.StoreData.Industry} </p>

           </div>
        );
      }