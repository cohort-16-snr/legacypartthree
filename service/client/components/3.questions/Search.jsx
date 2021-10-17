import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        
    }
    handleChange(e) {
        this.props.lift(this.state.value)
        this.setState({
        [e.target.name]: e.target.value
        })
    }
   
    
    render() {
        return (
            <div>
                <button onClick = {()=>console.log(this.state.value)}>LOGGOGOGO</button>
            <div>
                <p className="font-sans font-ms text-sm text-gray-600 mb-4">Questions & answers </p>
            </div>
            <form className="relative w-full">
                <input  type="text" name = "value" className="px-5 py-3 border border-gray-600 min-w-full"  onChange = {this.handleChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
                <button onClick={()=>this.props.lift(this.state.value)}  className="flex items-center border-t-0 focus:border-black" >
                    <svg className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg "
                        viewBox="0 0 22 22">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </form>
        </div>
        )
    }
}
