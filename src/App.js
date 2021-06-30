// import React, { Component } from 'react';

// class App extends Component {   
  
//   render() {
//     return (
//       <div>
//         <h1>CatBook</h1>
//         {/* add CatList component here */}
//       </div>
//     );
//   }
// }

// export default App


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
 
class App extends Component {
 
  componentDidMount() {
    
    this.props.fetchCats()
    
  }

  render() {
  
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
        {/* missing component */}
      </div>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
 
// export default connect(mapStateToProps)(App)
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


