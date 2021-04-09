import {
    Login,
    Home
} from "../page";

export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean
}

const Routers: RouterType[] = ([
    {
        path: '/login',
        component: Login,
        root: []
    },
    {
        path: '/home',
        component: Home,
        root: [],
        notExect: false
    }
])

export {
    Routers
}