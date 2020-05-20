import React, { Component } from 'react'
import './StampContainer.css'

class StampContainerData extends Component {
    render() {
        const stamp = this.props.stamp;
        const { name, yearPublished, isStamped, country} = stamp;
    
        return (
            <div class='container-fluid'>
                <div class="row">
                    <table className='stampTable'>
                        <tbody>

                                <td className='tableHeader'>Name</td>
                            <tr>
                                <td className='tableData'>{name}</td>
                            </tr>

                            
                                <td className='tableHeader'>Year</td>
                            <tr>
                                <td className='tableData'>{yearPublished}</td>
                            </tr>


                                <td className='tableHeader'>Country</td>
                            <tr>
                                <td className='tableData'>{country}</td>
                            </tr>


                                <td className='tableHeader'>Is stamped</td>
                            <tr>
                                <td className='tableData'>{isStamped}</td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default StampContainerData