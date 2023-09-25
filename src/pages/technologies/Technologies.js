import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Technologies.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Technologies extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="technologies-main">
        <Header theme={theme} />
        <div className="basic-technologies">
          <Fade bottom duration={2000} distance="40px">
            <div className="technologies-heading-div">
              <div className="technologies-heading-text-div">
                {/*<h1
                  className="technologies-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>*/}
                <h1
                  className="technologies-heading-text"
                  style={{ color: theme.text }}
                >
                  Skills
                </h1>
                <h3
                  className="technologies-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Languages
                </h3>
                <p
                  className="technologies-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  java, python, bash, javascript, html, css, C, SQL
                </p>
                <h3
                  className="technologies-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  technologies
                </h3>
                <p
                  className="technologies-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Linux, vim, git, docker
                </p>
                <h3
                  className="technologies-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  Frameworks
                </h3>
                <p
                  className="technologies-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Technologies;
