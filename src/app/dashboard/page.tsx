import React from 'react'
import {
  Package, Clock, ShoppingCart,
  AlertTriangle
} from 'lucide-react';
import data from "@/data/data.json"
import MedicineCards from './MedicineCards';

function page() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <Package className="text-white" size={24} />
              <span className="text-white font-medium">Inventory Overview</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <Clock className="text-white" size={24} />
              <span className="text-white font-medium">Order Status/History</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <AlertTriangle className="text-white" size={24} />
              <span className="text-white font-medium">Quick Actions</span>
            </div>
          </div>
          <div className="flex items-center">
            <ShoppingCart className="text-white cursor-pointer hover:opacity-80 transition-opacity" size={24} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Cards Section Placeholder */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg border border-gray-700">
          <h2 className="text-white text-2xl font-medium mb-4">Stock Available</h2>
          <MedicineCards />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Package size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-200">Stock Updated: Paracetamol 500mg</p>
                  <p className="text-sm text-gray-400">1 hours ago • System</p>
                </div>
              </div>
              <div className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Package size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-200">Stock Updated: Zifi 200mg</p>
                  <p className="text-sm text-gray-400">2 hours ago • System</p>
                </div>
              </div>
              <div className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Package size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-200">Stock Updated: Unwanted 72</p>
                  <p className="text-sm text-gray-400">6 hours ago • System</p>
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Items */}
          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Low Stock Items</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-gray-400">Item Name</th>
                    <th className="pb-3 text-gray-400">Current Stock</th>
                    <th className="pb-3 text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-gray-300">
                    <td className="py-3">Ibuprofen 650mg</td>
                    <td className="py-3">11 units</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/20">
                        Critical
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-gray-300">
                    <td className="py-3">Amoxicillin 250mg</td>
                    <td className="py-3">21 units</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/20">
                        Critical
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-800">
                  <tr className="text-gray-300">
                    <td className="py-3">Citrazine 300mg</td>
                    <td className="py-3">7 units</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/20">
                        Critical
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page







