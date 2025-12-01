import { ActionType } from "../action-types"

export const fetchMovies = (movies) => {
    return {
        typpe: ActionType.FETCH_MOVIES,
        payload: movies
    }
}