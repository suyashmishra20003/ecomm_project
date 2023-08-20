export interface menuInterface {
    label:string,
    command?: ()=>void,
    icon?:string
    children?:menuInterface[]
}