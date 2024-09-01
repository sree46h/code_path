import axios from "axios";

export const createCreator = (application) => async(dispatch) => {
    dispatch({
        type: "REGISTER_CREATOR_REQUEST",
    });

    try {
        const response = await axios.post("/api/creators/create", application);
        // const response2 = await axios.get('/api/books/allBook');

        dispatch({
            type: "REGISTER_CREATOR_REQUEST_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "REGISTER_CREATOR_REQUEST_FAILED",
            payload: error,
        });
    }
};

export const updateCreator = (user,comm) => async(dispatch) => {
    dispatch({
        type: "REGISTER_CREATOR_REQUEST",
    });

    try {
        const response = await axios.post("/api/creators/update",user,{params:{comm:comm ? true : false}});
        // const response2 = await axios.get('/api/books/allBook');

        dispatch({
            type: "REGISTER_CREATOR_REQUEST_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "REGISTER_CREATOR_REQUEST_FAILED",
            payload: error,
        });
    }
};

export const getCreator = ()=>async(dispatch) => {
    dispatch({
        type: "GET_CREATOR_REQUEST"
    })

    try{
        const response = await axios.get("/api/creators/getCreators");
        dispatch({
            type: "GET_CREATOR_REQUEST_SUCCESS",
            payload: response.data,
        });
    }
    catch (error) {
        dispatch({
            type: "GET_CREATOR_REQUEST_FAILED",
            payload: error,
        });
    }
}