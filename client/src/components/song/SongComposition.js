import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormLabel, FormControl,FormGroup, FormControlLabel } from 'material-ui/Form';
import InstrumentRoles from '../../components/InstrumentRoles/InstrumentRoles'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const user = {name:'violet', instruments:[]};
const song = {name: 'abc', artist: 'abc', genre: 'abc', instrumentRoles: [{instrument: 'Guitar', users: ['saba', 'violet']},{instrument: 'Violin', users: ['chris', 'ronald']}]};

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    }
}

const SongComposition = (props) => {
    return (
        <div>
            <AppBar  color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">

                        {'Song ' + song.name + ' by ' + song.artist + ' (' + song.genre + ')'}
                    </Typography>
                </Toolbar>

            <InstrumentRoles currentUser={user} instrumentRoles={song.instrumentRoles} unsubscribe={ value => { console.log(value)}} subscribe={ value => { console.log(value)}} />

            </AppBar>
        </div>
    )
}

export default withStyles(styles)( SongComposition);