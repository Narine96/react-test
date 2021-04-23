import './toggleButton.css';

function ToggleButton(props) {
  return (
    <div className={`toggle-container ${props.selected ? "dark-container" : ""}`} onClick={props.toggleSelected}>
        <div className={`dialog-button ${props.selected ? "" : "disabled"}`}>
        </div>
    </div>
  );
}
export default ToggleButton;