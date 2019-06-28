import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'
import {
    DEADLINE,
    DELAY,
    DATE_SECTIONS
} from './constants'
import {TimeSection} from './time-section';
import {getTimeUntil} from './utils';

export class TimeUntil extends Component {

    state = {
        remainingTime: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    };

    renderTimeSections = () => DATE_SECTIONS.map(
        sectionItem => {
            const {key, title, hideOnZero} = sectionItem;
            const {remainingTime} = this.state;
            return (
                <TimeSection
                    title={title}
                    key={key}
                    hedeOnZero={hideOnZero}
                    value={remainingTime[key]}
                />
            );
        }
    );

    componentDidMount() {
        setInterval(() => this.setState(() => getTimeUntil(DEADLINE)), DELAY)
    }

    render() {
        const {timePassed} = this.state;
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        {timePassed ? 'TIME PASSED' : 'Event starts in'}

                    </div>
                    <div className="countdown_bottom">
                        {this.renderTimeSections()}
                    </div>
                </div>
            </Slide>
        )
    }
}
