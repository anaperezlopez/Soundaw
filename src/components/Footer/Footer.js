import React from 'react'
import { FooterContainer, FooterLeft, FooterCenter, FooterRight } from './styles'
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from '@material-ui/core';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg" alt="cover"/>
                <div>
                    <h4>Shape of My heart</h4>
                    <p>Sting</p>
                </div>
            </FooterLeft>
            <FooterCenter>
                <ShuffleIcon className="shuffle" />
                <SkipPreviousIcon className="icon" />
                <PlayCircleOutlineIcon className="icon" />
                <SkipNextIcon className="icon" />
                <RepeatIcon className="repeat" />
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid item><PlaylistPlayIcon /></Grid>
                    <Grid item><VolumeDownIcon /></Grid>
                    <Grid item xs><Slider/></Grid>
                </Grid>


            </FooterRight>
        </FooterContainer>
    )
}

export default Footer
