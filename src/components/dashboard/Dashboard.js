import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import * as style from "../../index.css"


class Dashboard extends Component {
    render() {
        const { projects } = this.props

        return (
        <div className={style["Thread"]}>
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
        )
    }
}

const MapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
        // projects: state.project.projects
    }
}

// export default Dashboard;
// export default connect(mapStateProps)(Dashboard);
export default compose(
    connect(MapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);