import React, {Component} from 'react';


export default class Face extends Component {
    render() {
        return (<div>
                <div className="col-md-3">
                    <img src={this.props.details.avatar} alt=""/>
                    <a href="">{this.props.details.firstName}</a>
                </div>
                <div className="col-md-9">

                </div>
            </div>
        );
    }
}
