import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <h2 className="mt-2 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
