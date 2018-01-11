import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ListSubheader from 'material-ui/List/ListSubheader';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    }
}

const INSTRUMENTS = ['Vocals', 'Keyboard','Drums', 'Guitar', 'Violin', 'Bass', 'Percussion'];

/** both Profile and Song Components should have instrument toggle actions **/
const InstrumentSelector =  ({headerText, selected, toggleCallback}) => {

        return (
            <div style={styles.root}>
                    <List subheader={<ListSubheader>{headerText}</ListSubheader>}>
                        {INSTRUMENTS.map(value => (
                            <ListItem key={value} dense button>
                                <ListItemText primary={value} />
                                <ListItemSecondaryAction>
                                    <Checkbox
                                        onChange={() => toggleCallback(value)}
                                        checked={selected.includes(value)}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
            </div>
        );
}


export default withStyles(styles)( InstrumentSelector);