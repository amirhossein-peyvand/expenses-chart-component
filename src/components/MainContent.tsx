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
      <section className="bottom"></section>
    </main>
  );
};

export default MainContent;
