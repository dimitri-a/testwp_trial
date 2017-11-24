import React, {Component} from 'react';
import Face from './Face';

export default class List extends Component {


    render() {

        let display = this.props.employees.map
        (
            (emp) => (
                <Face details={emp}></Face>
            )
        )

        return (<div className="container">
                <div className="row">
                    <div className="col-md-4">

                        {display}
                    </div>
                </div>


            </div>
        );
    }
}
