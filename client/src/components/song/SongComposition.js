import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormLabel, FormControl,FormGroup, FormControlLabel } from 'material-ui/Form';
import InstrumentRoles from '../../components/InstrumentRoles/InstrumentRoles'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const user = {name:'chris', instruments:[]};
const song = {name: 'Green Onions', artist: 'Booker T. and the MGs', genre: 'R and B', instrumentRoles:
        [
            {instrument: 'Percussion', users: ['saba']},
            {instrument: 'Bass', users: ['chris']},
            {instrument: 'Guitar', users: ['ronald']},
            {instrument: 'Keyboard', users: ['violet']}
        ]};

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    }
}

const SongComposition = (props) => {
    const name = props.match.params.name;

    return (
        <div>
            <div  color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">

                        {'Song ' + song.name + ' by ' + song.artist + ' (' + song.genre + ')'}
                    </Typography>
                </Toolbar>

            <InstrumentRoles currentUser={user} instrumentRoles={song.instrumentRoles} unsubscribe={ value => { console.log(value)}} subscribe={ value => { console.log(value)}} />

            </div>
        </div>
    )
}

export default withStyles(styles)( SongComposition);