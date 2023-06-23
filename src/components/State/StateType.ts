export type AuthUser = {
    name: string
    email: string
}

export type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset',
}

export type CounterAction = UpdateAction | ResetAction