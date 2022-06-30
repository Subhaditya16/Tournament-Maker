import {connect} from 'react-redux';

import Homepage from '../pages/HomePage/Homepage';

const mapStateToProps = state => ({
    teams: state.teams
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)