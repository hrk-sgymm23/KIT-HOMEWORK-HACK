import React from "react";
import { useParams } from "react-router";
import ProjectSummary from './ProjectSummary';

const ProjectDetails = (props) => {
    // const id = props.match.params.id;
    const { id } = useParams;
    console.log(id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Homework Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus consectetur, adipisci in, corrupti corporis omnis, maxime assumenda nisi expedita eius libero tempora totam officiis. Tenetur repellat accusamus excepturi aspernatur sint?</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd, September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;