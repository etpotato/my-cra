import gif from "../img/gif.gif";
import jpeg from "../img/jpeg.jpg";
import png from "../img/png.png";
import svg from "../img/svg.svg";

export default function Images () {
  return (
    <ul>
      <li>
        <img src={ gif } alt="image" />
      </li>
      <li>
        <img src={ jpeg } alt="image" />
      </li>
      <li>
        <img src={ png } alt="image" />
      </li>
      <li>
        <img src={ svg } alt="image" />
      </li>
      <li className="item-bg"></li>
    </ul>
  );
};
