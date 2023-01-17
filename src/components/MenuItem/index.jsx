import * as C from "./style";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ icon, link, title }) => {
  const location = useLocation();

  let isActive = location.pathname == link;

  return (
    <C.Container active={isActive}>
      <Link to={link}>
        <C.LinkIcon src={icon} />
      </Link>
    </C.Container>
  );
};

export default MenuItem;
