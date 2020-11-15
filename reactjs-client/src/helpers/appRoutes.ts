import AuthLayout from '../layouts/authLayout';
import { Login } from '../features/auth/login/login';
import Home from '../features/home/home';
import AppLayout from '../layouts/appLayout';
import { Routes } from './routes';
import { Registration } from '../features/auth/registration/registration';
import { ForgetPassword } from '../features/auth/forgetPassword/forgetPassword';


export class AppRoutes {

    public get GetRoutes(): IRouteLayoutModel[] {
        return [
            this.AuthRoutes(),
            this.AppRoutes()
        ]
    }

    private AuthRoutes(): IRouteLayoutModel {
        return {
            layout: AuthLayout,
            subRoutes: [
                { path: Routes.login, component: Login },
                { path: Routes.register, component: Registration },
                { path: Routes.forgotPassword, component: ForgetPassword }
            ]
        }
    }

    private AppRoutes(): IRouteLayoutModel {
        return {
            layout: AppLayout,
            subRoutes: [
                { path: Routes.root, component: Home}
            ]
        }
    }

}


interface IRouteLayoutModel {
    layout: any,
    subRoutes: ISubRouteModel[]
}

interface ISubRouteModel {
    path: string;
    component: any;
    exact?: any;
}