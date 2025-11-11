"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"

interface AttackEvent {
  id: number
  ip: string
  country: string
  flag: string
  attackType: string
  timestamp: string
  port: number
  severity: "Low" | "Medium" | "High" | "Critical"
}

const mockEvents: Omit<AttackEvent, "id">[] = [
  {
    ip: "185.220.101.42",
    country: "Russia",
    flag: "🇷🇺",
    attackType: "SSH Brute Force",
    timestamp: "14:32:15",
    port: 22,
    severity: "High",
  },
  {
    ip: "103.79.141.92",
    country: "China",
    flag: "🇨🇳",
    attackType: "Port Scanning",
    timestamp: "14:32:08",
    port: 445,
    severity: "Medium",
  },
  {
    ip: "45.142.214.123",
    country: "Ukraine",
    flag: "🇺🇦",
    attackType: "Malware Drop Attempt",
    timestamp: "14:31:54",
    port: 80,
    severity: "Critical",
  },
  {
    ip: "198.98.57.207",
    country: "USA",
    flag: "🇺🇸",
    attackType: "Web Exploitation",
    timestamp: "14:31:42",
    port: 443,
    severity: "High",
  },
  {
    ip: "31.220.87.45",
    country: "Netherlands",
    flag: "🇳🇱",
    attackType: "Botnet Scanning",
    timestamp: "14:31:29",
    port: 3389,
    severity: "Low",
  },
]

export function AttackFeed() {
  const [events, setEvents] = useState<AttackEvent[]>([])

  useEffect(() => {
    // Initial load
    setEvents(mockEvents.map((event, i) => ({ ...event, id: i })))

    // Simulate real-time events
    const interval = setInterval(() => {
      const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)]
      const now = new Date()
      const newEvent: AttackEvent = {
        ...randomEvent,
        id: Date.now(),
        timestamp: now.toLocaleTimeString("en-US", { hour12: false }),
      }

      setEvents((prev) => [newEvent, ...prev.slice(0, 9)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-destructive/20 text-destructive border-destructive/30"
      case "High":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Low":
        return "bg-accent/20 text-accent border-accent/30"
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30"
    }
  }

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Activity className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Real-Time Attack Feed</h2>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
          <div className="p-6">
            <div className="space-y-2">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl">{event.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono text-foreground">{event.ip}</code>
                        <span className="text-muted-foreground text-sm">→</span>
                        <span className="text-sm text-muted-foreground">{event.country}</span>
                      </div>
                      <p className="text-sm text-foreground font-medium">{event.attackType}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className="font-mono">
                      Port {event.port}
                    </Badge>
                    <Badge variant="outline" className={getSeverityColor(event.severity)}>
                      {event.severity}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-mono">{event.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
