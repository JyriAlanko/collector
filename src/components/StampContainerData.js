import React, { Component } from 'react'
import './StampContainerData.css'

class StampContainerData extends Component {
    render() {
        const stamp = this.props.stamp;
        const { name, yearPublished, isStamped, country} = stamp;
    
        return (
            <div className='container-fluid'>
                <div className="row">
                    <table className='stampTable'>
                        <tbody>

                            <tr>
                                <td className='tableHeader'>Name</td>
                                <td className='tableData'>{name}</td>
                            </tr>

                            
                            <tr>
                                <td className='tableHeader'>Year</td>
                                <td className='tableData'>{yearPublished}</td>
                            </tr>


                            <tr>
                                <td className='tableHeader'>Country</td>
                                <td className='tableData'>{country}</td>
                            </tr>


                            <tr>
                                <td className='tableHeader'>Price</td>
                                <td className='tableData'>{stamp.getPriceString()+ '€'}</td>
                            </tr>


                            <tr>
                                <td className='tableHeader'>Is stamped</td>
                                <td className='tableData'>{'' + isStamped}</td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default StampContainerData