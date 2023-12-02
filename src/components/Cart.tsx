interface Props {
  cartItems: number[];
  onClear: () => void;
  onAdd: () => void;
}

const Cart = ({ cartItems, onClear, onAdd }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <button className="btn btn-danger" onClick={onClear}>Clear</button>
      <button className="btn btn-primary" onClick={onAdd}>Add</button>
    </>
  );
};

export default Cart;
