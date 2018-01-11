import React, {Component} from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import MusicNoteIcon from 'material-ui-icons/MusicNote'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux'

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

const SongItem = withRouter(({history, name, artist}) => (
  <ListItem button onClick={() => history.push('/songComposition/'+name)}>
    <ListItemIcon><MusicNoteIcon /></ListItemIcon>
    <ListItemText primary={name} secondary={artist} />
  </ListItem>
))

const SongList = ({classes, songList: [...songs]}) => (
  <div className={classes.root}>
    <h2>List of Songs</h2>
    <List className={classes.root}>
      {songs.map(SongItem)}
    </List>
  </div>
)

SongList.propTypes = {
  classes: PropTypes.object.isRequired,
  songList: PropTypes.array.isRequired
}

const StyledSongList = withStyles(songListStyle)(SongList)

class Landing extends Component {
  constructor({classes, state}) {
    super();
    this.classes = classes;
    this.state = state
  }
  render() {
    return (
      <div className={this.classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <StyledSongList songList={this.props.songListData}></StyledSongList>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songListData: state.songList
  }
}

export default connect(mapStateToProps, null)(withStyles(landingGridStyle)(Landing))