import React, { Component } from 'react'
import AddQuest from "./AddQuest.jsx"
import MoreAns from "./MoreAns.jsx"
import QuestAns from "./QuestAns.jsx"
import Search from "./Search.jsx"
import ShowPhotoClick from "./ShowPhotoClick.jsx"
import SeeMoreAns from './SeeMoreAns.jsx'

export default class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoclick :{
                on: false,
                off: true
            },
            showmoreclick : {
                on:false,
                off:true
            }
        }
        this.handleClickShow = this.handleClickShow.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        if (this.state.photoclick.on === false)
            this.setState({
                on: true,
                off: false
            })
        else {
            this.setState({
                photoclick: {
                    on:false,
                    off:true
                }
            })
        }
    }
    handleClickShow() {
        if (this.state.showmoreclick.on === false)
            this.setState({
                on: true,
                off: false
            })
        else {
            this.setState({
                showmoreclick: {
                    on:false,
                    off:true
                }
            })
        }
    }
    check() {
        if (this.state.photoclick.on === true) {
            return <ShowPhotoClick handle={this.handleClick} />

        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* {this.check()} */}
                    <SeeMoreAns />
                </div>
                <div className=" pr-16 pl-16">
                    <div className="grid grid-cols-1 gap-4  w-full  mx-auto">
                        <Search />
                        <QuestAns handle={this.handleClick} />
                    </div>
                    <div className="grid gap-2  w-3/5 mt-4 ml-4 mx-auto" style={{ display: 'flex' }}>
                        <MoreAns />
                        <AddQuest />
                    </div>
                </div>
            </div>
        )
    }
}

