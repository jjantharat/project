
export default function WelcomeComponent() {
  return (
    <div className="flex overflow-hidden bg-neutral w-full min-h-screen justify-center items-center p-4 ">
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-gray-200 shadow-lg rounded-lg p-8 text-center w-full max-w-md mx-4 sm:mx-0">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for visiting our website. We're excited to have you here.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}


