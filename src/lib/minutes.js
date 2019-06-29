import React, { Component } from 'react';


export default class Cron extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    onChange(e) {
        if(e.target.value <60) {
            let val = ['0','*','*','*','*','?']
            val[1] = `*/${e.target.value}`;
            this.props.onChange(val)
        } 
    }

    render() {
        this.state.value = this.props.value
        return (<div className="well">   
               Every <input type="Number" onChange={this.onChange.bind(this)} value={this.state.value[1].split('/')[1]} min={1} max={60}/> minute(s)'
        </div>)
    }
}
