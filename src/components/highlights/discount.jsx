import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton'

const DISCOUNT_MAX = 70;
const TIMEOUT_STEP = 25;
const INCREASE_STEP = 1;

export class Discount extends Component {

    state = {
        discountValue: 0
    };

    calcDiscount = () => {
        const timer = setInterval(() => {
            this.setState((currentState) =>
                currentState.discountValue >= DISCOUNT_MAX
                    ? clearInterval(timer)
                    : {
                        discountValue: currentState.discountValue + INCREASE_STEP
                    }
            );
        }, TIMEOUT_STEP);
    };

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={this.calcDiscount}
                    >
                        <div className="discount_porcentage">
                            {/*<span>{this.state.discountValue}%</span>*/}
                            <span>{this.state.discountValue}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                            <MyButton
                                bck="#ffa800"
                                text="Purchase tickets"
                                color="#fff"
                                link="https://google.com"
                            />
                        </div>
                    </Slide>

                </div>

            </div>
        )
    }
}
