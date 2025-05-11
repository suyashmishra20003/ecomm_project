export interface menuInterface {
    label:string,
    command?: ()=>void,
    icon?:string
    children?:menuInterface[]
}

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image?: string,
    isitemAddedToWishlist?: boolean,
    rating?:{
        rate:number,
        count:number
    }
}

export interface TableInputConfig<T = any>{
    tableRows:T[],
    tableHeaders:{field:string,header:string}[],
    enableActionColumn:boolean,
    moduleName:TableModuleName
}

export interface UserDetail {
    name:string,
    email:string
}

export enum TableAction {
    EDIT ='edit',
    DELETE = 'delete'
}

export enum TableModuleName  {
    USER_CONTROL = 'user-control',
    PRODUCT = 'product',
    ORDER = 'ORDER'
}