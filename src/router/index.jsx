import RouterWaiter from "./RouterWaiter/index";
import routeBefore from './routeBefore'
import routes from './routes'
import {createHashHistory} from 'history'
function RouterConfig() {
    return (
        <RouterWaiter routes={routes} onRouteBefore={routeBefore} />
    )
}
export default RouterConfig
export const history = createHashHistory({window});
