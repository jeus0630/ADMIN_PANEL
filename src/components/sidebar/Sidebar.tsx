import * as React from 'react';
import "./sidebar.scss";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface ISidebarProps {
}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
    return (
        <div className='side-bar'>
            <div className="side-bar-wrapper">
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Dashboard</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <LineStyle className="side-bar-icon"></LineStyle>
                            Home
                        </li>
                        <li className="side-bar-list-item">
                            <Timeline className="side-bar-icon"></Timeline>
                            Analytics
                        </li>
                        <li className="side-bar-list-item">
                            <TrendingUp className="side-bar-icon"></TrendingUp>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Quick Menu</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <NavLink to="/users" className={"link"}>
                                <PermIdentity className="side-bar-icon"></PermIdentity>
                                Users
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <NavLink to="/products" className={"link"}>
                                <Storefront className="side-bar-icon"></Storefront>
                                Products
                            </NavLink>
                        </li>
                        <li className="side-bar-list-item">
                            <AttachMoney className="side-bar-icon"></AttachMoney>
                            Transactions
                        </li>
                        <li className="side-bar-list-item">
                            <BarChart className="side-bar-icon"></BarChart>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Notifications</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <MailOutline className="side-bar-icon"></MailOutline>
                            Mail
                        </li>
                        <li className="side-bar-list-item">
                            <DynamicFeed className="side-bar-icon"></DynamicFeed>
                            Feedback
                        </li>
                        <li className="side-bar-list-item">
                            <ChatBubbleOutline className="side-bar-icon"></ChatBubbleOutline>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="side-bar-menu">
                    <h3 className="side-bar-title">Staff</h3>
                    <ul className="side-bar-list">
                        <li className="side-bar-list-item">
                            <WorkOutline className="side-bar-icon"></WorkOutline>
                            Manage
                        </li>
                        <li className="side-bar-list-item">
                            <Timeline className="side-bar-icon"></Timeline>
                            Analytics
                        </li>
                        <li className="side-bar-list-item">
                            <Report className="side-bar-icon"></Report>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
