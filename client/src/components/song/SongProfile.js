import React, {Component} from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import { FormLabel, FormControl,FormGroup, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import InstrumentSelector from '../../components/InstrumentSelector/InstrumentSelector'
import { addSong } from '../../actions/songActions'


class SongProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            artist: '',
            genre: '',
            instrutments: []
        };
        this.handleSelectedInstructment = this.handleSelectedInstructment.bind(this);
    }

    componentDidMount() {
        this.setState({user: this.props.user});
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
        this.props.history.push("/");
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSelectedInstructment(value) {
        const newInstruments = [...this.state.instrutments, value];
        console.log(newInstruments);       
        this.setState({instrutments: newInstruments});
    }

    render() {
        let username = '';
        if(this.props.user) {
            username = this.props.user.userName;
        }
        return (
            <div>
                <h1>Song Profile for {username}</h1>
                <form>

                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <TextField
                                        id="name"
                                        label="Song Name"
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
                    <InstrumentSelector headerText={'Please select the instruments for this song'} selected={this.state.instrutments} toggleCallback={this.handleSelectedInstructment} />
                    <div>
                        <Button raised color="primary" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSong: (song) => dispatch(addSong(song))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongProfile)