import React, { Component } from 'react';

import './EditStampFrom.css';

import Stamp from '../../Stamp';
import StampContainerImage from '../StampContainerImage';

class EditStampFrom extends Component {

    constructor(props){
        super(props);
        const stamp = props.stamp;

        this.state = {
            stampName: stamp ? stamp.name : '',
            stampYearPublished: stamp ? stamp.YearPublished : '',
            stampIsStamped: stamp ? stamp.IsStamped : false,
            stampCountry: stamp ? stamp.country : '',
            stampPrice: stamp ? stamp.price : '',
            stampImageUrl: stamp ? stamp.imageUrl: ''
        }
    }

    stampNameChange = (event) => {
        this.setState({
            stampName: event.target.value,
        });
    }

    stampYearChange = (event) => {
        this.setState({
            stampYearPublished: event.target.value
        });
    }

    stampStampedChange = (event) => {
        this.setState({
            stampIsStamped: event.target.value = 'true'
        });
    }

    stampCountryChange = (event) => {
        this.setState({
            stampCountry: event.target.value
        });
    }

    stampPriceChange = (event) => {
        this.setState({
            stampPrice: event.target.value
        })
    }

    stampImageChange =(event) => {
        this.setState({
            stampImageUrl: event.target.value
        })
    }

    submit = (event) => {
        let {stampName, stampYearPublished, stampIsStamped, stampCountry,
            stampPrice, stampImageUrl } = this.state;

        stampPrice = parseFloat(stampPrice) || 0.00;
        stampIsStamped = !!stampIsStamped;

        const stamp = new Stamp(stampName, stampYearPublished, stampIsStamped, stampCountry,
            stampPrice, stampImageUrl);

        this.props.addStampToCollection(stamp);
        console.log(stamp);
        event.preventDefault();
    }
    render (){
        const {stampName, stampYearPublished, stampIsStamped, stampCountry, stampPrice, stampImageUrl} = this.state;

    
        return (
            <div className='editContainer'>
                <form onSubmit={this.submit}> 

                    <StampContainerImage imageUrl={stampImageUrl} />

                    <table>
                        <tbody>
                            <tr>
                                {/* Name */}
                                <td>
                                    <label>Name</label>
                                </td>

                                <td>
                                    <input type='text' value={stampName} onChange={this.stampNameChange} />
                                </td>
                            </tr>

                            <tr>
                                {/* Year */}
                                <td>
                                    <label>Published</label>
                                </td>

                                <td>
                                    <input type='text' value={stampYearPublished} onChange={this.stampYearChange} />

                                </td>
                            </tr>

                            <tr>
                                {/* Stamped */}
                                <td>
                                    <label>Is Stamped</label>
                                </td>

                                <td>
                                    <select value={stampIsStamped} onChange={this.stampStampedChange}>
                                        <option value='true'>true</option>
                                        <option value='false'>false</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                {/* Stamped */}
                                <td>
                                    <label>Country</label>
                                </td>

                                <td>
                                    <input type='text' value={stampCountry} onChange={this.stampCountryChange} />
                                </td>
                            </tr>
                            
                            <tr>
                                {/* Price */}
                                <td>
                                    <label>Price</label>
                                </td>

                                <td>
                                    <input type='text' value={stampPrice} onChange={this.stampPriceChange} />
                                </td>
                            </tr>

                            <tr>
                                {/* Image */}
                                <td>
                                    <label>Image URL</label>
                                </td>

                                <td> 
                                    <input type='text' value={stampImageUrl} onChange={this.stampImageChange} />
                                </td>
                            </tr>

                            <tr valign="bottom">
                                <td>

                                </td>
                                <button className="editButton" type='submit'>Submit</button>
                            </tr>
                            
                        </tbody>
                    </table> 
                </form>
            </div>
    
        )
    }
}

export default EditStampFrom;