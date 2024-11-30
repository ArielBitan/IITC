const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg mb-4">
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
