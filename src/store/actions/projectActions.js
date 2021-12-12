// import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebase from "@firebase/app-compat";

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        console.log(firestore);
        // firestore.collection('projects').add({
        firebase.firestore().collection('projects').add({
            ...project,
            authorFirstName: 'Haruki',
            authorLastName: 'Sugiyama',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
        
    }
};