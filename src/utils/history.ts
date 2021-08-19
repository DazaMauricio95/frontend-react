import { createBrowserHistory } from 'history';
import { RouteComponentProps } from 'react-router-dom';
export const history = createBrowserHistory();

export declare interface TheHeaderProps { 
    history: RouteComponentProps["history"] 
};
export declare interface TheSidebarProps { 
    location: RouteComponentProps["location"] 
}
