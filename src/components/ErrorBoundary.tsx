export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};
