"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const logLines = [
  "[2025-01-10 14:32:15] SSH: New connection from 185.220.101.42:54321",
  "[2025-01-10 14:32:16] AUTH: Login attempt - username: admin, password: ******",
  "[2025-01-10 14:32:17] AUTH: Authentication failed for 185.220.101.42",
  "[2025-01-10 14:32:18] SSH: Connection closed by 185.220.101.42",
  "[2025-01-10 14:32:19] ALERT: Brute force detected from 185.220.101.42",
  "[2025-01-10 14:32:20] SIEM: Event enriched with threat intelligence",
  "[2025-01-10 14:32:21] DB: Event logged to database - ID: 7829431",
]

export function LogOutput() {
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight
    }
  }, [])

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Sample Log Output</h2>

        <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
          <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">honeypot.log</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-accent/50" />
            </div>
          </div>

          <div ref={logRef} className="p-6 font-mono text-sm overflow-x-auto max-h-[400px] overflow-y-auto">
            {logLines.map((line, index) => (
              <div key={index} className="mb-2 hover:bg-secondary/30 px-2 py-1 rounded transition-colors">
                <span className="text-muted-foreground select-none mr-4">{index + 1}</span>
                <span className="text-foreground break-all">{line}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
