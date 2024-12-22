interface ErrorProps {
  message: String;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Error</h2>
        <p className="mt-2 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
