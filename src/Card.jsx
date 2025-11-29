function Card({ title, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/images/${image}`} alt={title} />
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
