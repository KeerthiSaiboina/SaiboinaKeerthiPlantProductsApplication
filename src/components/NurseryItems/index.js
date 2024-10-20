import "./index.css";

const NurseryItems = (props) => {
  const { nurseryDetails } = props;
  const { id, image, content } = nurseryDetails;

  return (
    <li className="nursery-list-container">
      <img src={image} className="nursery-image" />
      <p className="content">{content}</p>
    </li>
  );
};

export default NurseryItems;
