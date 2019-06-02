import React, { Component } from 'react'

import Zoom from 'react-reveal/Zoom'

import MyButton from '../utils/MyButton'

export default class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur  do eiusmod tempor  et dolore magna aliqua. Ut enim ad minim veniam',
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute consectetur  do eiusmod',
            'Duis aute irure  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        linkto: ['http://sales/b','http://sales/m','http://sales/s'],
        delay: [500, 0, 500]
    }


    showBoxes = () => (
        this.state.prices.map((box, i)=>(
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item" >
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                        {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>

                    </div>
                </div>
            </Zoom>
            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        )
    }
}
