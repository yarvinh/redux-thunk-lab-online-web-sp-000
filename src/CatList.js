// write your CatList component here
import React, { Component } from 'react';


class CatList extends Component {
renderCatList = ()=>{
 return this.props.catPics.map(cat =>{
     return (
        
           <img key={cat.id} src={cat.url} alt="Girl in a jacket" width="500" height="600"/>
       
        )
 })

}

  render() {
    return (
      <div>
            {this.renderCatList()}
      </div>
    );
  }
};

export default CatList 