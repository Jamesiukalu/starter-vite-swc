import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link 
        to="/product" 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        View Product Page
      </Link>
    </div>
  );
}

export default Home;