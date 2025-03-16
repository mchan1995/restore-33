
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="text-center p-12 bg-white rounded-xl shadow-soft border border-pink-100">
        <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-pink-700 mb-6">Oops! Page not found</p>
        <a href="/" className="text-pink-500 hover:text-pink-700 btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
