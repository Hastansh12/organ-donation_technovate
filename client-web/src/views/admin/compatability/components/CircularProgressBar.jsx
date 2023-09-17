import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ percentage, text }) => {
  return (
    <div style={{ width: "80px" }}>
      <CircularProgressbar
        value={percentage}
        text={text}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: `rgba(62, 152, 199, ${100})`,
          textColor: "#333",
          trailColor: "#d6d6d6",
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
