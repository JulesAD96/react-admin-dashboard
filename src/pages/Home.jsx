import Chart from "../components/Chart";
import FeaturedInfor from "../components/FeaturedInfor";

import "../css/pages/home.css";
import {userData} from "../dummyData";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

function Home() {
    return (
        <div className="home">
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg/>
            </div>
        </div>
    )
}


export default Home;