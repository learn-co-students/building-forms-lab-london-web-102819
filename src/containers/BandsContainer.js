import React, { Component } from 'react'
import {connect} from 'react-redux';
import BandInput from '../components/BandInput.js';

class BandsContainer extends Component {
  render() {
    return(
      <div>
          <BandInput addBand = {this.props.addBand} />
          <ul>
              {this.props.bands.map((b, idx) => <li key = {idx}>{b.name}</li>)}
          </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {addBand: band => dispatch({type: "ADD_BAND", band})}
}

export default connect(state => ({bands: state.bands}), mapDispatchToProps)(BandsContainer);
