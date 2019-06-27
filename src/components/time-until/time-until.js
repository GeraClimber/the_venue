import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'
import {
    DEADLINE,
    DELAY,
    DATE_SECTIONS
} from '../featured/constants'
import {TimeSection} from './time-section';
import {getTimeUntil} from './utils';

export class TimeUntil extends Component {

    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    renderTimeSections = () => DATE_SECTIONS.map(
        sectionItem => {
            const {key, title} = sectionItem;
            return <TimeSection title={title} key={key} value={this.state[key]} />;
        }
    );

    componentDidMount() {
        setInterval(() => this.setState(() => getTimeUntil(DEADLINE)), DELAY)
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        {this.renderTimeSections()}
                    </div>
                </div>
            </Slide>
        )
    }
}
