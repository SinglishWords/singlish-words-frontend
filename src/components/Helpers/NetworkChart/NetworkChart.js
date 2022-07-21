import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { visualisationState } from "../../../utils/state";
import "./NetworkChart.css";

export class NetworkChart extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          tooltip: {},
          // legend: [
          //   {
          //     data: data.categories.map(function (a) {
          //       return a.name;
          //     })
          //   }
          // ],
          animationDuration: 1500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              type: "graph",
              zoom: 3,
              layout: "force",
              draggable: true,
              force: {
                repulsion: [75, 100],
                friction: 0.3,
              },
              data: visualisationState.nodes,
              links: visualisationState.links,
              categories: visualisationState.categories,
              roam: true,
              label: {
                position: "right",
                formatter: "{b}",
                show: true,
                fontFamily: "Segoe UI",
                fontSize: 15,
              },
              lineStyle: {
                color: "source",
                curveness: 0,
                width: 1.5,
              },
              emphasis: {
                focus: "adjacency", // Known bug - Causes buggy legend hovering. https://github.com/apache/echarts/issues/13869 Will resolve buggy hovering using CSS disable hovering
                lineStyle: {
                  width: 4,
                },
              },
            },
          ],
        }}
        style={{ height: "700px" }}
      />
    );
  }
}
export default NetworkChart;
