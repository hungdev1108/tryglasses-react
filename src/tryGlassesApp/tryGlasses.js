import React, { Component } from "react";
import style from "./style.module.css";

import clsx from "clsx";

import glasses_data from "../assets/dataGlasses.json";

export class TryGlasses extends Component {
  state = {
    glassesImg: glasses_data[0].url,
    glassesName: glasses_data[0].name,
    glassesDesc: glasses_data[0].desc,
  };

  changeGlasses = (item) => {
    console.log(item);
    this.setState(
      {
        glassesImg: item.url,
        glassesName: item.name,
        glassesDesc: item.desc,
      },
      () => {}
    );
  };

  // render data
  renderContentGlasses = () => {
    return (
      <div className={style.model_content}>
        <div className={style.glasses_name}>{this.state.glassesName}</div>
        <div className={style.glasses_desc}>{this.state.glassesDesc}</div>
      </div>
    );
  };

  renderGlasses = () => {
    return glasses_data.map((item) => {
      return (
        <button
          key={item.id}
          onClick={() => {
            this.changeGlasses(item);
          }}
        >
          <img className={clsx(style.glasses_item)} src={item.url} alt={item.url}></img>
        </button>
      );
    });
  };

  render() {
    return (
      <div>
        <section className={clsx(style.try_glasses)}>
          <div className={clsx(style.try_glasses_overlay)}></div>
          {/* Header */}
          <header className={clsx(style.header)}>TRY GLASSES APP ONLINE</header>
          {/* Model */}
          <div className={clsx(style.model_test)}>
            {/* Try on glasses Model */}
            <div className={clsx(style.model_tryonglasses)}>
              <div className={clsx(style.model_item)}>
                <img
                  className={clsx(style.model_img)}
                  src="./glassesImage/model.jpg"
                  alt="model"
                />
                {/* Glasses */}
                <div className={clsx(style.glasses_model)}>
                  <img
                    className={clsx(style.glasses_model_img)}
                    src={this.state.glassesImg}
                    alt={this.state.glassesImg}
                  />
                </div>
                {/* Glasses Content */}
                {this.renderContentGlasses()}
              </div>
            </div>
            {/* Stock Model */}
            <div className={clsx(style.model_stock)}>
              <img
                className={clsx(style.model_img)}
                src="./glassesImage/model.jpg"
                alt="model2"
              />
            </div>
          </div>
          <div className={clsx(style.select_glasses)}>{this.renderGlasses()}</div>
        </section>
      </div>
    );
  }
}

export default TryGlasses;
