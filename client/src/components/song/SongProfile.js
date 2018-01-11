import React, {Component} from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import { FormLabel, FormControl,FormGroup, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { addSong } from '../../actions/songActions'


class SongProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            artist: '',
            genre: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, artist, genre} = this.state;
        const song = {
            name: this.state.name,
            artist: this.state.artist,
            genre: this.state.genre
        };
        console.log("testing ", song);
        
        this.props.addSong(song);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };

    render() {
        return (
            <div>
                <h1>Song Profile</h1>
                <form>

                    <FormControl component="fieldset">
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <TextField
                                id="name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        }
                        
                    />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <TextField
                                id="artist"
                                label="Artist"
                                value={this.state.artist}
                                onChange={this.handleChange('artist')}
                                margin="normal"
                            />
                        }
                        
                    />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel
                        control={
                            <TextField
                                id="genre"
                                label="Genre"
                                value={this.state.genre}
                                onChange={this.handleChange('genre')}
                                margin="normal"
                            />
                        }
                        
                    />
                    </FormGroup>
                </FormControl>

                <div>
                    <Button raised color="primary" onClick={this.handleSubmit}>Submit</Button>
                </div>                
                </form>  
                
                
                
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSong: (song) => dispatch(addSong(song))
    }
}

export default connect(null, mapDispatchToProps)(SongProfile)