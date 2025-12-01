import { ActionType } from "../action-types"

export const fetchMovies = (movies) => {
    return {
        typpe: ActionType.FETCH_MOVIES,
        payload: movies
    }
}

export const selectedMovie = (movie)=>{
    return {
        type : ActionType.SELECT_MOVIES,
        payload:movie
    }
}