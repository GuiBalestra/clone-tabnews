import img from "../public/construcao.png";
import Image from "next/image";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: "0",
        margin: "0",
        backgroundColor: "#CCC",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={img} alt="Em construção" width={1080} />
      </div>
    </div>
  );
}

export default Home;
