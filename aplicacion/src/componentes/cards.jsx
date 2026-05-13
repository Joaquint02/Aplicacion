function Cards({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.titulo}</h3>
        </div>
      ))}
    </>
  );
}