export default function Button({ changeView, value, btnStyle }) {
  return (
    <button
      onClick={() => changeView(value)}
      className={`btn ${
        btnStyle ? "btn-reverse-primary" : "btn-primary"
      } fz-20 mr-15`}
    >
      {value}
    </button>
  );
}
