import * as React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.scss";

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
        </div>
    );
};

export default Home;
