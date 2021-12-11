const initState = {
    projects: [
        {id: '1', title: '技術者と社会一つも聞いてなかった件', content: 'blah blah blah'},
        {id: '2', title: '穴水最高評定だったけど何か質問ある？', content: 'blah blah blah'},
        {id: '3', title: 'hoge', content: 'blah blah blah'},
    ]
}
const projectReducer = ( state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('craeted homework', action.project)
    } 
    return state

}

export default projectReducer