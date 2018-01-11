import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Avatar from 'material-ui/Avatar';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    }
}

/*
const sampleRoles = [{instrument: 'Guitar', users: ['saba', 'violet']},{instrument: 'Violin', users: ['chris', 'ronald']}];
const sampleUsers = [{name: 'saba', instruments: ['Guitar', 'Vocals']}];
 */
const InstrumentRoles =  ({currentUser, users, instrumentRoles}) => {

    function isUserSubscribedToInstrument(i) {
        return instrumentRoles.filter(value=> value.instrument === i)[0].users.includes(currentUser);
    }

    function generateColor() {
        return '#' +  Math.random().toString(16).substr(-6);
    }
    return (
        <div style={styles.root}>
            <List subheader={<ListSubheader>Song Instrument Roles</ListSubheader>}>
                {instrumentRoles.map(value => (
                    <ListItem key={value.instrument} dense button>
                        <ListItemText primary={value.instrument} />
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={isUserSubscribedToInstrument(value.instrument)} onChange={()=> console.log('switch')} aria-label="subscribeStatus" />
                                }
                                label={isUserSubscribedToInstrument(value.instrument) ? 'Remove Me' : 'Sign me up!'}
                            />
                        </FormGroup>
                        <List>
                            {value.users.map(user => (
                                <ListItem key={user} dense button>
                                    <Avatar style={{backgroundColor: generateColor()}}>{user.slice(0,1)}</Avatar>
                                    <ListItemText primary={user} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}


export default withStyles(styles)( InstrumentRoles);