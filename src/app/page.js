export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to Contaxt</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your ultimate project management solution
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Organize</h2>
            <p>Keep your projects structured and clear</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Collaborate</h2>
            <p>Work seamlessly with your team</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Track</h2>
            <p>Monitor progress and meet deadlines</p>
          </div>
        </div>
      </div>
    </div>
  )
}