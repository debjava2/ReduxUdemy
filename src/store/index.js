import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer,addMovie,removeMovie } from "./slices/moviesSlice";
import { songsReducer,addSong,removeSong } from "./slices/songsSlice";


const store =configureStore({
    reducer:{
        songs:songsReducer,
        movies:moviesReducer
    }
})

//store.dispatch({
//     type:'song/addSong',
//     payload:'NewSong'
// })

//store.dispatch(songSlice.actions.addSong("New Songs"))
//console.log(store.getState());
//console.log(moviesSlice.actions.reset.toString())
export {store}
export {addMovie,removeMovie,addSong,removeSong}