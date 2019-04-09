import React, { Component } from 'react';
import {
    Mask,
    Animation
} from 'mdbreact';
import { Parallax } from 'react-parallax';

class Streak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle
        }
    }
    render () {
        return (
            <Parallax
                blur={3}
                bgImage={'/images/cover1.jpg'}
                bgImageAlt='parallax-img'
                strength={100}
            >
                <Mask className='streak' overlay='blue-grey-slight'>
                    <Animation reveal type='bounceIn'>
                        <div style={{height: '250px'}}>
                            <h3 className='streak-title'>{this.state.title}</h3>
                            <p className='streak-subtitle'>{this.state.subtitle}</p>
                        </div>
                    </Animation>
                </Mask>
            </Parallax>
        );
    }
}

export default Streak;