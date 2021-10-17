import React, { Component } from 'react'
import AddQuest from "./AddQuest.jsx"
import MoreAns from "./MoreAns.jsx"
import QuestAns from "./QuestAns.jsx"
import Search from "./Search.jsx"
import ShowPhotoClick from "./ShowPhotoClick.jsx"
import SeeMoreAns from './SeeMoreAns.jsx'
import TriggerAddQuest from './TriggerAddQuest.jsx'
import $ from "jquery"
import Loadmore from './Loadmore.jsx'
import Searchedquest from './Searchedquest.jsx'
import WriteAnswer from './WriteAnswer.jsx'

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
            loadmore: {
                on: false,
                off: true
            },
            addanswer : {
                on : false,
                off:true
            },
            data: [],
            searchingfor: '',
            filtreddata: []
        }
        this.handleClickShow = this.handleClickShow.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickLoad = this.handleClickLoad.bind(this)
        this.lift = this.lift.bind(this)
        this.handleClickAddAns = this.handleClickAddAns.bind(this)

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
    handleClickAddAns() {
        if (this.state.addanswer.on === false)
            this.setState({
                addanswer: {
                    on: true,
                    off: false
                }
            })
        else {
            this.setState({
                addanswer: {
                    on: false,
                    off: true
                }
            })
        }
    }
    lift(option) {
        var filtred = this.state.data.results.filter((e) => {
            return e.question_body.includes(this.state.searchingfor)

        })
        this.setState({
            searchingfor: option,
            filtreddata: filtred
        })

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
    searchCheck() {

    }
    renderquestCheck() {
        if (this.state.loadmore.on === true) {
            return <Loadmore data={this.state.data.results} load={this.handleClickLoad} />
        }
        else if (this.state.searchingfor.length > 2) {

            return <Searchedquest load={this.handleClickLoad} data={this.state.filtreddata} />
        }
        else {
            return <QuestAns addans = {this.handleClickAddAns} load={this.handleClickLoad} data={this.state.data.results} handle={this.handleClick} />
        }
    }
    handleClickLoad() {
        if (this.state.loadmore.on === false)
            this.setState({
                loadmore: {
                    on: true,
                    off: false
                }
            })
        else {
            this.setState({
                loadmore: {
                    on: false,
                    off: true
                }
            })
        }
    }

    componentDidMount() {
        this.fetch()
    }
    fetch() {
        const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=40341"
        $.ajax({
            type: 'GET',
            url: server,
            headers: {
                "Authorization": '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'
            }
        })
            .then((data) => {
                console.log(data)
                this.setState({
                    data: data
                })
            })
            .catch(err => {
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
            return <SeeMoreAns data = {this.state.data.results} handle={this.handleClickShow} />
        }
        if (this.state.addquest.on === true) {
            return <TriggerAddQuest handle={this.handleClickAdd} />
        }
        if(this.state.addanswer.on === true){
            return <WriteAnswer handle={this.handleClickAddAns}/>
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
                        <Search lift={this.lift} />
                        {this.renderquestCheck()}
                    </div>
                    <div className="grid gap-2  w-3/5 mt-4 ml-4 mx-auto" style={{ display: 'flex' }}>
                        <MoreAns handle={this.handleClickShow} />
                        <AddQuest handle={this.handleClickAdd} />
                    </div>
                </div>
            </div>
        )
    }
}

