import "./Buttons.css";

const InitButtons = ({ handleNextClick, handlePrevClick }) => {
  return (
    <div className="Parent">
      <button className="NextButton" onClick={handleNextClick}>
        Next
      </button>
      <button className="PrevButton" onClick={handlePrevClick}>
        Prev
      </button>
    </div>
  );
};

export default InitButtons;
