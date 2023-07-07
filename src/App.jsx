import "./App.css";
import Modal from "./components/Modal";
import RatingComponent from "./components/RatingComponent";

const App = () => {
  return (
    <div>
      <Modal>
        <RatingComponent />
      </Modal>
    </div>
  );
};

export default App;
