import React, {Component} from 'react';
import '../assets/css/section.css';

class Section extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="section-container">
                <h1>{this.props.h1}</h1>
                <div className="section-body">

                </div>
            </div>
        );
    }
}

export default Section;