"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const attackVolumeData = [
  { hour: "00:00", attacks: 45 },
  { hour: "04:00", attacks: 32 },
  { hour: "08:00", attacks: 67 },
  { hour: "12:00", attacks: 89 },
  { hour: "16:00", attacks: 123 },
  { hour: "20:00", attacks: 98 },
]

const geoData = [
  { name: "China", value: 35, color: "#8b5cf6" },
  { name: "Russia", value: 28, color: "#06b6d4" },
  { name: "USA", value: 18, color: "#10b981" },
  { name: "Brazil", value: 12, color: "#f59e0b" },
  { name: "Other", value: 7, color: "#6b7280" },
]

const protocolData = [
  { protocol: "SSH", count: 450 },
  { protocol: "HTTP", count: 320 },
  { protocol: "RDP", count: 180 },
  { protocol: "FTP", count: 95 },
]

export function DashboardAnalytics() {
  return (
    <section className="py-24 container mx-auto px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Dashboard & Analytics</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Attack Volume Chart */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-xl font-semibold mb-6">24-Hour Attack Volume</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={attackVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    borderRadius: "8px",
                    color: "#f9fafb",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="attacks"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ fill: "#8b5cf6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Geographic Sources */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-xl font-semibold mb-6">Geographic Attack Sources</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={geoData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {geoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    borderRadius: "8px",
                    color: "#f9fafb",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Protocol Breakdown */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Attack Protocol Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={protocolData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
                <XAxis dataKey="protocol" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 41, 59, 0.9)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    borderRadius: "8px",
                    color: "#f9fafb",
                  }}
                />
                <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </section>
  )
}
