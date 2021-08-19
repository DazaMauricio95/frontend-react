import { RouteChildrenProps, RouteComponentProps } from 'react-router';
export type typeInitialRoute = {
    component: any
    render?: (props: RouteComponentProps<any>) => React.ReactNode
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode
    path?: string | string[]
    exact?: boolean
    sensitive?: boolean
    strict?: boolean
    authentication: Boolean
}