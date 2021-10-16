import React, { Component } from 'react'
import AddQuest from "./AddQuest.jsx"
import MoreAns from "./MoreAns.jsx"
import QuestAns from "./QuestAns.jsx"
import Search from "./Search.jsx"
import ShowPhotoClick from "./ShowPhotoClick.jsx"
import SeeMoreAns from './SeeMoreAns.jsx'
import TriggerAddQuest from './TriggerAddQuest.jsx'
import $ from "jquery"

export default class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoclick: {
                on: false,
                off: true
            },
            showmoreclick: {
                on: false,
                off: true
            },
            addquest: {
                on: false,
                off: true
            },
            data : []
        }
        this.handleClickShow = this.handleClickShow.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }
    handleClick() {
        if (this.state.photoclick.on === false)
            this.setState({
                photoclick: {
                    on: true,
                    off: false
                }
            })
        else {
            this.setState({
                photoclick: {
                    on: false,
                    off: true
                }
            })
        }
    }
    handleClickShow() {
        if (this.state.showmoreclick.on === false)
            this.setState({
                showmoreclick: {
                    on: true,
                    off: false
                }
            })
        else {
            this.setState({
                showmoreclick: {
                    on: false,
                    off: true
                }
            })
        }
    }
    componentDidMount(){
this.fetch()
    }
    fetch(){
       const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=40341"
$.ajax({
    type : 'GET',
    url : server,
    headers : {
        "Authorization" : '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'
    }
})
.then((data)=>{
    console.log(data)
    this.setState({
        data : data
    })
})
.catch(err=>{
    console.log(err);
})
    }

    handleClickAdd() {
        if (this.state.addquest.on === false)
            this.setState({
                addquest: {
                    on: true,
                    off: false
                }
            })
        else {
            this.setState({
                addquest: {
                    on: false,
                    off: true
                }
            })
        }
    }
    check() {
        if (this.state.photoclick.on === true) {
            return <ShowPhotoClick handle={this.handleClick} />

        }
        if (this.state.showmoreclick.on === true) {
            return <SeeMoreAns handle={this.handleClickShow} />
        }
        if (this.state.addquest.on === true) {
            return <TriggerAddQuest handle={this.handleClickAdd} />
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.check()}

                </div>
                <div className=" pr-16 pl-16">
                    <div className="grid grid-cols-1 gap-4  w-full  mx-auto">
                        <Search />
                        <QuestAns handle={this.handleClick} />
                    </div>
                    <div className="grid gap-2  w-3/5 mt-4 ml-4 mx-auto" style={{ display: 'flex' }}>
                        <MoreAns data = {this.state.data} handle={this.handleClickShow} />
                        <AddQuest handle={this.handleClickAdd} />
                    </div>
                </div>
            </div>
        )
    }
}

