import {connect} from 'react-redux';

import { endMatch, setSelectedMatch } from '../actions';

import Viewmatches from '../pages/ViewMatches/Viewmatches';

const mapStateToProps = state => ({
    matches: state.matches
})

const mapDispatchToProps = dispatch => ({
    endMatch: (match_id) => {
        dispatch(endMatch(match_id))
    },
    setSelectedMatch: (match_id) => {
        dispatch(setSelectedMatch(match_id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Viewmatches);