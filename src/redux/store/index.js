const {createStore} = require("redux");
const { default: reducers } = require("../reducer");


const store = createStore(
    reducers
)