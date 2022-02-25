import * as React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.scss";

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart></Chart>
        </div>
    );
};

export default Home;
