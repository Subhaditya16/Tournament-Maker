import {connect} from 'react-redux';
import { updateMatchScore } from '../actions';

import Handlematch from '../pages/HandleMatch/Handlematch';

const getSelectedMatch = (matches, match_id) => {
    return matches.find(function (match){
        return match.id === match_id;
    }) 
}

const mapStateToProps = state => ({
    selected_match: getSelectedMatch(state.matches,state.selected_match)
})

const mapDispatchToProps = dispatch => ({
    updateScore: (score_one, score_two,match_id) => {
        dispatch(updateMatchScore(score_one,score_two,match_id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Handlematch)