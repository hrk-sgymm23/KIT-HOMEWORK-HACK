import React from "react";
// import ProjectSummary from './ProjectSummary';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { BrowserRouter as Router, useParams} from "react-router-dom";


const ProjectDetails = (props) => {
    // const id = props.match.params.id;
    const { id } = useParams()
    const { projects } = props;
    console.log(projects);
    const project = projects[id];
    // console.log(id);
    if (project) {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    {/* <span className="card-title">Homework Title - {id}</span> */}
                    <span className="card-title">{ project.title }</span>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consectetur, adipisci in, corrupti corporis omnis, maxime assumenda nisi expedita eius libero tempora totam officiis. Tenetur repellat accusamus excepturi aspernatur sint?</p> */}
                    <p>{ project.content }</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by {project.authFirstName} {project.authLastName}</div>
                    <div>2nd, September, 2am</div>
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}

const MapStateToProps = (state, ownProps) => {
    // const { id } = useParams()
    // const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    // const project = projects ? projects[id] : null
    return {
        projects: projects
    }
}

export default compose(
    connect(MapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);
// export default ProjectDetails;

