import React from 'react';
import cloud from './cloud.jpg'
import barrett from './barrett.jpg'
import aeris from './aeris.jpg'
import { connect } from 'react-redux'

const Stats = props => {
    return (
        <div className="menu stats-menu">
            <ul>
                <li>
                    <img className="img" src={cloud} alt="" />
                    <ul id="status">
                        <li>Cloud</li>
                        <li><span>LV</span> 60</li>
                        <div id="health">
                            <li><span>HP</span>{props.count}/6003</li>
                            <progress value={props.count} max="6003" id="hp"></progress>
                        </div>
                        <div id="magic">
                            <li><span>MP</span> 5/76</li>
                            <progress value="5" max="76" id="mp"></progress>
                        </div>
                    </ul>
                    <ul className="limitBreak">
                        <li>next level</li>
                        <progress value="0" max="100" class="limit"></progress>
                        <li>limit level 1</li>
                        <progress value="60" max="100" class="limit"></progress>
                    </ul>
                </li>
                <li>
                    <img className="img" src={barrett} alt="" />
                    <ul id="status">
                        <li>Barrett</li>
                        <li><span>LV</span> 10</li>
                        <div id="health">
                            <li><span>HP</span> 61/377</li>
                            <progress value="61" max="377" id="hp"></progress>
                        </div>
                        <div id="magic">
                            <li><span>MP</span> 34/76</li>
                            <progress value="34" max="76" id="mp"></progress>
                        </div>
                    </ul>
                    <ul className="limitBreak">
                        <li>next level</li>
                        <progress value="0" max="100" class="limit"></progress>
                        <li>limit level 1</li>
                        <progress value="60" max="100" class="limit"></progress>
                    </ul>
                </li>
                <li>
                    <img className="img" src={aeris} alt="" />
                    <ul id="status">
                        <li>Aeris</li>
                        <li><span>LV</span> 10</li>
                        <div id="health">
                            <li><span>HP</span> 201/377</li>
                            <progress value="201" max="377" id="hp"></progress>
                        </div>
                        <div id="magic">
                            <li><span>MP</span> 10/76</li>
                            <progress value="10" max="76" id="mp"></progress>
                        </div>
                    </ul>
                    <ul className="limitBreak">
                        <li>next level</li>
                        <progress value="0" max="100" class="limit"></progress>
                        <li>limit level 1</li>
                        <progress value="60" max="100" class="limit"></progress>
                    </ul>
                </li>
            </ul>
        </div>
        
    )
};

const mapStateToProps = state => ({
    count: state
})

export default connect(mapStateToProps)(Stats);