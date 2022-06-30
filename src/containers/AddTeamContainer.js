import {connect} from 'react-redux';

import Addteam from '../pages/AddTeam/Addteam';

import {addTeam} from '../actions';

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    addTeam: (team) => {
        dispatch(addTeam(team));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Addteam)