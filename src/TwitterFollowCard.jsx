import PropTypes from "prop-types";
import { useState } from "react";
export default function TwitterFollowCard({
  children,
  userName,

  imagen,
}) {
  const [isFollowing, setIsFollowing] = useState(0);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Siguiendo" : "Seguir",
    buttonClassName = isFollowing
      ? "btn-twitterCard is-following"
      : "btn-twitterCard";
  return (
    <article className="profile-twitterCard">
      <header className="header-twitterCard">
        <img
          className="avatar-twitterCard"
          src={imagen}
          alt="doc"
          width={300}
        />
        <div className="data-twitterCard">
          <strong>{children}</strong>
          <span>{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.defaultProps = {
  children: "",
  imagen: "",
  userName: "Usuario",
  name: "Desconocido",
  isFollowing: false,
};

TwitterFollowCard.propTypes = {
  imagen: PropTypes.string,
  userName: PropTypes.string,
  name: PropTypes.string,
  isFollowing: PropTypes.bool,
};
