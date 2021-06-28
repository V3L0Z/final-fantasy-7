import React from 'react'
import { connect } from 'react-redux'

class Menu extends React.Component {

    increment = () => {
        this.props.dispatch({ type: "Potion" });
    };

    render () {
        return (
            <div className="menu side-menu">
                <ul>
                    <button id="button" onClick={this.increment}>Item</button>
                    <li>Magic</li>
                    <li>Materia</li>
                    <li>Equip</li>
                    <li>Status</li>
                    <li>Order</li>
                    <li>Limit</li>
                    <li>Config</li>
                    <li><br></br></li>
                    <li>Save</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state
})
export default connect(mapStateToProps)(Menu);