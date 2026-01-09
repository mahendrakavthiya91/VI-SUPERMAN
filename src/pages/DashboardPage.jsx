import React from 'react'

function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary-600 mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Total Projects: 5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>
          <p>Pending Tasks: 12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Team</h2>
          <p>Team Members: 8</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage