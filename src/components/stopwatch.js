import React, {Component} from 'react';
import Time from './format_time';

class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        }

        this.update = this.update.bind(this);

    }

    start(){
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start !== null){
            newStart = newStart - elapsed;
        }

        this.setState({
            status: 'running',
            start: newStart
        })
        setTimeout(this.update, 10);
    }

    stop(){
        this.setState({
            status: 'stopped'
        })
    }

    update(){
        const {status, start} = this.state;
        if(status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }

    }

    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        })
    }

    render(){
        const {status, start, elapsed} = this.state;

        return(
            <div className="jumbotron">
                <h1 className="display-3"> <Time elapsed={elapsed} /> </h1>
                <hr className="my-3" />
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start.bind(this)}>Start</button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.stop.bind(this)}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset.bind(this)}>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;