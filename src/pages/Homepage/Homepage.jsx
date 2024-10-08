import React from "react";
import "./Homepage.css";

import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import ProjectCard from "../../components/projectcard/ProjectCard";
import CustomCarousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import News from "../../components/news/News";
import ProjectDeal from "../../components/projectdeal/ProjectDeal";
import Story from "../../components/story/Story";
import { SearchOutlined, LineChartOutlined, CarryOutOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

import projectData from "../../assets/data/projects.json";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
// import 'antd/dist/antd.css';
export const ProjectList = [];
export const StoryList = [];
export const NewsList = [];

const contentStyle = {
    width: 100,
    height: 100,
    background: "green",
};

for (let p of projectData) {
    ProjectList.push(<ProjectCard data={p} />);
    StoryList.push(<Story data={p} />);
    NewsList.push(<News data={p} />);
}

const Homepage = () => {
    const { innerWidth } = window;
    return (
        <div className="homepage">
            <div className="banner">
                <div className="text">Unlock Global Real Estate Wealth with AI-Powered Insights</div>
                {/* <Search /> */}
            </div>
            <div className="projects">
                <div className="heading">Trending Projects</div>
                {innerWidth > 630 ? (
                    <CustomCarousel items={ProjectList} />
                ) : (
                    <Mobcarousel items={ProjectList} width={"--card-width"} />
                )}
            </div>
            {innerWidth > 1000 ? (
                <div className="project-deal">
                    <ProjectDeal />
                </div>
            ) : (
                <div className="project-deal">
                    <div className="heading">Deal of the Month</div>
                    {ProjectList[0]}
                </div>
            )}

            <div className="about-section">
                <div className="about">
                    <div className="heading">
                        Marrfa brings cross-border real estate investment opportunities to your fingertips
                    </div>
                    <div className="bullets">
                        <div className="vertical-bar"></div>
                        <div className="bullet-icon">
                            <div className="bullet">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="point"> Real-time view of available investment opportunities</div>
                        <div className="bullet-icon">
                            <div className="bullet">
                                <BarChartOutlined />
                            </div>
                        </div>
                        <div className="point"> Compare opportunities across metrics</div>
                        <div className="bullet-icon">
                            <div className="bullet">
                                <TeamOutlined />
                            </div>
                        </div>
                        <div className="point"> Online Customer success manager</div>
                        <div className="bullet-icon">
                            <div className="bullet">
                                <LineChartOutlined />
                            </div>
                        </div>
                        <div className="point">Track project and handover status in-app</div>
                        <div className="bullet-icon">
                            <div className="bullet">
                                <CarryOutOutlined />
                            </div>
                        </div>
                        <div className="point">Track real-time market pulse on Marrfa</div>
                    </div>
                    <CustomButton style={{ padding: "10px 30px" }} text={"Enquire about Project and Details"} />
                </div>
                <img src="/assets/marrfa-clipart.png" />
            </div>
            <div className="story-wrapper">
                <div className="heading">Marrfa's Success Stories</div>
                <Mobcarousel items={StoryList} width={"--story-width"} />
            </div>
            <div className="news-wrapper">
                <div className="heading">News and Articles</div>
                {innerWidth > 630 ? (
                    <CustomCarousel items={NewsList} />
                ) : (
                    <div className="expanded-news">
                        {NewsList.slice(0, 3).map((v)=>v)}
                        <CustomButton text={"Real all"} fullWidth rounded={false} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Homepage;
