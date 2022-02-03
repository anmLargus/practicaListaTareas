export interface Task {
    id?: number, // propiedad opcional, puede o no venir => "?""
    text: string,
    day: string,
    reminder: boolean
}