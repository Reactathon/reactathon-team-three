import React from 'react'
import PropType from 'prop-types'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InstrumentSelector from '../../components/InstrumentSelector/InstrumentSelector'
import './Profile.css'

const styles = {
    root: {
        width: '100%',
        maxWidth: 360,
    }
}

const UserProfile = ({name, email}) => {
    return (
        <div style={styles.root}>
            <List>
                <h1>Jonah Band Member Profile</h1>
                <Divider />
                <ListItem><ListItemText primary={"Name: " + name}/></ListItem>
                <ListItem><ListItemText primary={"Email: " + email}/></ListItem>
            </List>
            <InstrumentSelector headerText={'Please select the instruments you can play'} selected={['Guitar','Violin']} toggleCallback={ value => { console.log(value)}} />
        </div>
    );
}

/**
 * PropType definition -- not 100% necessarily for a react component to function however it is good practice to
 * define each component's expected prop types as a way to catch easy mistakes and a way to self document components.
 *
 * Try passing a number to firstName instead of a string and checking the console
  */
UserProfile.propTypes = {
    firstName: PropType.string.isRequired,
    lastName: PropType.string.isRequired,
    email: PropType.string.isRequired
}

export default withStyles(styles)(UserProfile);