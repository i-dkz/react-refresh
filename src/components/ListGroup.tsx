import { useState } from "react";

interface Props {
  cities: string[];
  selectedIndex: number;
  setSelectedIndex: (item: number) => void;
  index?: number;
  children?: React.ReactNode;
}

const MyListItem = ({
  selectedIndex,
  setSelectedIndex,
  index,
  children,
}: Props) => {
  return (
    <li
      onClick={() => setSelectedIndex(index)}
      className={selectedIndex ? "list-group-item active" : "list-group-item"}
    >
      {children}
    </li>
  );
};

const ListGroup = ({ cities }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {cities.map((city, index) => (
          <MyListItem
            cities={cities}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            index={index}
          >
            {city}
          </MyListItem>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
