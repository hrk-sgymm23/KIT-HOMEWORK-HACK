import React, { Component } from "react";
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import projectReducer from "../../store/reducers/projectReducer";

class CreateHomework extends Component {
    state = {
        title: '',
        content: ''
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken3">Create new Homework</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handlechange} />
                    </div>
                    <div className="input-field">
                        <label className="content">Homework Content</label>
                        <textarea id="content" className="materialized-textarea" onChange={this.handlechange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

// export default CreateHomework
export default connect(null, mapDispatchToProps)(CreateHomework)