interface Props {
  city: string | null;
}



const Viewer = ({ city }: Props) => {
    console.log(city)
  if (city === undefined) return <p>No city selected</p>;
  return <p>The city is: {city}</p>;
};

export default Viewer;
