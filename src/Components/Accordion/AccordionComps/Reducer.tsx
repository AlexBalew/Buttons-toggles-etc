import React from "react";

type ActionType = {
    type: string
}
export const TOGGLE_CONSTANT = 'Toggle-collapsed'

type StateType = {
    collapsed: boolean
}

export const reducer = (state: boolean, action: ActionType) => {

    switch (action.type) { ///синтаксис свича
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error('Bad action type')
    }
    return state
}