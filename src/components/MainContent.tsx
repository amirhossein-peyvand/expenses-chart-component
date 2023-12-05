import "../sass/MainContent.scss";
import ChartsContainer from "./ChartsContainer";

const MainContent = () => {
  return (
    <main className="mainContent">
      <section className="top">
        <h2>Spending - Last 7 days</h2>
        <ChartsContainer />
      </section>
      <hr />
      <section className="bottom">
        <div className="left">
          <span>Total this month</span>
          <span>$478.33</span>
        </div>
        <div className="right">
          <span>+2.4%</span>
          <span>from last month</span>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
