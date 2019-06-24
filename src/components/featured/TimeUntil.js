import React, {Component} from 'react'
import Slide from 'react-reveal/Slide'

const DEADLINE = 'Dec, 16, 2019';
const DELAY = 1000;
const MILLISECONDS = 1000;

const DATE_SECTIONS = [
    {
        title: 'Days',
        key: 'days'
    },
    {
        title: 'Hs',
        key: 'hours'
    },
    {
        title: 'Min',
        key: 'minutes'
    },
    {
        title: 'Sec',
        key: 'seconds'
    }
];

export default class TimeUntil extends Component {

    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    timeSection = (sectionItem) => {
        console.log(sectionItem);
        const {title, key} = sectionItem;
        return (
            <div className="countdown_item" key={key}>
                <div className="countdown_time">
                    {this.state[key]}
                </div>
                <div className="countdown_tag">
                    {title}
                </div>
            </div>
        );
    };

    renderTimeSections = () => DATE_SECTIONS.map(
        sectionItem => this.timeSection(sectionItem)
    );

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        if (time < 0) {
            console.log("date passed");
        } else {
            const seconds = Math.floor((time / MILLISECONDS) % 60);
            const minutes = Math.floor((time / MILLISECONDS / 60) % 60);
            const hours = Math.floor((time / (MILLISECONDS * 60 * 60)) % 24);
            const days = Math.floor(time / (MILLISECONDS * 60 * 60 * 24));

            this.setState(() => ({
                days,
                hours,
                minutes,
                seconds
            }))
        }
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(DEADLINE), DELAY)
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
