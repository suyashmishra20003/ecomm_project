export interface footerMenu {
    label:string,
    command?: ()=>void,
    children?:footerMenu[]
}