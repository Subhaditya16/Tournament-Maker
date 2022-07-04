import {connect} from 'react-redux';

import { generateNewBracket } from '../actions';

import Generatebracket from '../pages/GenerateBracket/Generatebracket';

const mapStateToProps = state => ({
    teams: state.teams
})

const mapDispatchToProps = dispatch => ({
    generateNewBracket: (teams) => {
        dispatch(generateNewBracket(teams));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Generatebracket)