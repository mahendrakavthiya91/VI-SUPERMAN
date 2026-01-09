export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <ul className="space-y-2">
            <li className="bg-gray-100 p-3 rounded">Project Alpha</li>
            <li className="bg-gray-100 p-3 rounded">Project Beta</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded text-center">
              <p className="text-xl font-bold">5</p>
              <p>Active Projects</p>
            </div>
            <div className="bg-primary/10 p-4 rounded text-center">
              <p className="text-xl font-bold">12</p>
              <p>Tasks Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}