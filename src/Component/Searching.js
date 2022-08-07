import React from "react";
function Searching(props){

    return(
        <div className="searching_area">
            <input type="text" id= "name_keyword"className="search_input" placeholder="Search by name" onChange={()=>{props.search()}}/>
            <input type="text" id= "tag_keyword"className="search_input"  placeholder="Search by tag" onChange={()=>{props.search()}}/>
        </div>
    )

}
export default Searching;