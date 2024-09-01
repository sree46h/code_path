export const registerContentCreatorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER_CREATOR_REQUEST':
            return {
                loading: true
            }
        case 'REGISTER_CREATOR_REQUEST_SUCCESS':
            return { loading: false, success: true }
        case 'REGISTER_CREATOR_REQUEST_FAILED':
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const getCreatorRequestReducer=(state={},action)=>{
    switch (action.type) {
        case 'GET_CREATOR_REQUEST':
            return {...state, loading: true }
        case 'GET_CREATOR_REQUEST_SUCCESS':
            return {
                creator: action.payload,
                loading: false
            }
        case 'GET_CREATOR_REQUEST_FAILED':
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

export const getAllCreatorReducer = (state = { creators: [] }, action) => {
    switch (action.type) {
        case 'GET_CREATOR_REQUEST':
            return {...state, loading: true }
        case 'GET_CREATOR_REQUEST_SUCCESS':
            return {
                creators: action.payload,
                loading: false
            }
        case 'GET_CREATOR_REQUEST':
            return { error: action.payload, loading: false }
        default:
            return state
    }
}