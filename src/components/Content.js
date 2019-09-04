import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import moment from 'moment';
import './Style.css'

export default class Content extends Component {
    render(){
        const { users, loading, error } = this.props
        const img = users&&users.picture.large
        let center = []
        if(users!==undefined){
            center = {
                lat : Number(users&&users.location.coordinates.latitude),
                lng : Number(users&&users.location.coordinates.longitude)
            }
        }
        return(
            <div className="Content">
            {
                loading ? 
                <div className="Load">
                    <p className="Msg">Loading</p>
                </div> :
                error ? 
                <div className="Load">
                    <p className="Msg">Error</p>
                </div> :
                <div className="Contain">
                    <div className="Image" style={{backgroundImage:"url("+img+")",backgroundSize:'cover'}}/>
                    <div className="Data">
                        <div className="Title">
                            <p className="Username">{users&&users.name.first} {users&&users.name.last}</p>
                            <p className="Job">Developer</p>
                        </div>
                        <div className="Info">
                            <div className="Key">
                                <p className="Key2">Date of Birth</p>
                                <p>: {moment(users&&users.dob.date).format("MMMM Do, YYYY")}</p>
                            </div>
                            <div className="Key">
                                <p className="Key2">Gender</p>
                                <p>: {users&&users.gender}</p>
                            </div>
                            <div className="Key">
                                <p className="Key2">Phone</p>
                                <p>: {users&&users.phone}</p>
                            </div>
                            <div className="Key">
                                <p className="Key2">Email</p>
                                <p>: {users&&users.email}</p>
                            </div>
                            <div className="Key">
                                <p className="Key2">Address</p>
                                <p>: </p> 
                                <div style={{width:230,marginLeft:3}}>
                                    <p>
                                        {users&&users.location.street} {users&&users.location.city} {users&&users.location.postcode}, {users&&users.location.state}
                                    </p>
                                </div>
                            </div>
                            <div className="Key">
                                <p className="Key2">Location</p>
                                <p>: </p>
                                <div className="Maps">
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyDIadPvn134SPBWJoPDW7YBHLD0ZnMuPPQ" }}
                                        defaultCenter={center}
                                        defaultZoom={11}
                                        >
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        )
    }
}
