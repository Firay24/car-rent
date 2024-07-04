import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface PieChartProps {
  data: number[];
  labels: string[];
  centerTitle: string;
  centerSubtitle: string;
}

const PieChart = ({
  data,
  labels,
  centerTitle,
  centerSubtitle,
}: PieChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const myPieChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels || [],
          datasets: [
            {
              data: data || [],
              backgroundColor: [
                "#0D3559",
                "#175D9C",
                "#2185DE",
                "#63A9E8",
                "#A6CEF2",
              ],
              borderWidth: 8,
              borderColor: "#fff",
              borderRadius: 10,
            },
          ],
        },
        options: {
          cutout: "70%",
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        plugins: [
          {
            id: "centerTitle",
            beforeDraw: (chart) => {
              const { width, height, ctx } = chart;
              ctx.restore();

              // Draw title
              let fontSize = (height / 140).toFixed(2);
              ctx.font = `bold ${fontSize}em sans-serif`;
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#000";

              let text = centerTitle;
              let textX = Math.round((width - ctx.measureText(text).width) / 2);
              let textY = height / 2 - 10;

              ctx.fillText(text, textX, textY);

              // Draw subtitle
              fontSize = (height / 250).toFixed(2);
              ctx.font = `${fontSize}em sans-serif`;
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#666";

              text = centerSubtitle;
              textX = Math.round((width - ctx.measureText(text).width) / 2);
              textY = height / 2 + 25;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });

      return () => {
        myPieChart.destroy();
      };
    }
  }, [data, labels, centerTitle, centerSubtitle]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
