import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {
  const imgShrek =
      "https://i.pinimg.com/736x/12/82/1a/12821aef23d6a0615e08d056bf5018e1.jpg",
    imgBurro =
      "https://m.media-amazon.com/images/I/81b--uTvYSL._AC_UF1000,1000_QL80_.jpg";
  return (
    <>
      <TwitterFollowCard isFollowing imagen={imgShrek}>
        Shrek
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} imagen={imgBurro}>
        Burro
      </TwitterFollowCard>
    </>
  );
}
