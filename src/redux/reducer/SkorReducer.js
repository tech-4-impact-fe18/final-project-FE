export const INCREMENT_SKOR = "INCREMENT_SKOR"

function increment (){
    return {
        type : INCREMENT_SKOR
    }
}

const initialState = {
    skor : 0,
}

function SkorReducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT_SKOR :
            return {
                skor : state.skor + 1
            }
        default:
            return state;
    }
}

export default SkorReducer