import React from 'react'
import PropTypes from 'prop-types'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import MusicNoteIcon from 'material-ui-icons/MusicNote'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid';

const songListExample = [{name:"blah",artist:"Rolling Stones"},{name:"bloo",artist:"Moody Bloos"}]

const songListStyle = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

const landingGridStyle = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
})

const SongItem = songInfo => (
  <ListItem button>
    <ListItemIcon><MusicNoteIcon /></ListItemIcon>
    <ListItemText primary={songInfo.name} secondary={songInfo.artist} />
  </ListItem>
)

const SongList = ({classes, songList: [...songs]}) => (
  <div className={classes.root}>
    <h2>List of Songs</h2>
    <List className={classes.root}>
      {songs.map(s => SongItem(s))}
    </List>
  </div>
)

SongList.propTypes = {
  classes: PropTypes.object.isRequired,
  songList: PropTypes.array.isRequired
}

const StyledSongList = withStyles(songListStyle)(SongList)

const Landing = ({classes}) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <StyledSongList songList={songListExample}></StyledSongList>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(landingGridStyle)(Landing)