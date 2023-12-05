import data from "../../data.json";
import "../sass/ChartsContainer.scss";
import "../sass/colors.scss";

const ChartsContainer = () => {
  const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const currentWeekDay = new Date().getDay();
  const currentDayName = weekDays[currentWeekDay - 1];

  return (
    <section className="chartsContainer">
      <div className="chart one">
        <span className="amount">${data[0].amount}</span>
        <span
          className={`bar ${data[0].day}`}
          style={
            currentDayName === data[0].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[0].day}</span>
      </div>
      <div className="chart two">
        <span className="amount">${data[1].amount}</span>
        <span
          className={`bar ${data[1].day}`}
          style={
            currentDayName === data[1].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[1].day}</span>
      </div>
      <div className="chart three">
        <span className="amount">${data[2].amount}</span>
        <span
          className={`bar ${data[2].day}`}
          style={
            currentDayName === data[2].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[2].day}</span>
      </div>
      <div className="chart four">
        <span className="amount">${data[3].amount}</span>
        <span
          className={`bar ${data[3].day}`}
          style={
            currentDayName === data[3].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[3].day}</span>
      </div>
      <div className="chart five">
        <span className="amount">${data[4].amount}</span>
        <span
          className={`bar ${data[4].day}`}
          style={
            currentDayName === data[4].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[4].day}</span>
      </div>
      <div className="chart six">
        <span className="amount">${data[5].amount}</span>
        <span
          className={`bar ${data[5].day}`}
          style={
            currentDayName === data[5].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[5].day}</span>
      </div>
      <div className="chart seven">
        <span className="amount">${data[6].amount}</span>
        <span
          className={`bar ${data[6].day}`}
          style={
            currentDayName === data[6].day
              ? { backgroundColor: "hsl(186, 34%, 60%)" }
              : {}
          }
        ></span>
        <span className="day">{data[6].day}</span>
      </div>
    </section>
  );
};

export default ChartsContainer;
