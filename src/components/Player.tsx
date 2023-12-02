interface Props {
  playerName: string;
  onSwitch: () => void;
}

const Player = ({playerName, onSwitch} : Props) => {
  return (
    <div>
        Player:
      <ul className="list-group">
        <li className="list-group-item">{playerName}</li>
      </ul>
     
      <button className="btn btn-primary" onClick={onSwitch}>Switch</button>
    </div>
  );
};

export default Player;
