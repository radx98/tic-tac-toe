type Player = 'X' | 'O'
type Cell = Player | null
type Board = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

export type GameState = {
    currentMove: Player;
    winner: Player | null
    board: Board;
}

export const initialState: GameState = {
    currentMove: 'X',
    winner: null,
    board: [null, null, null, null, null, null, null, null, null]
}