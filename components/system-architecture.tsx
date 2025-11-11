import { Card } from "@/components/ui/card"
import { Server, Database, Activity, BarChart3, Shield, Cloud } from "lucide-react"

const architectureNodes = [
  { icon: Server, label: "Honeypot Server", description: "Cowrie/T-Pot" },
  { icon: Cloud, label: "Cloud VPS", description: "Isolated Network" },
  { icon: Database, label: "Log Collector", description: "Centralized Logs" },
  { icon: Activity, label: "SIEM", description: "Splunk/ELK Stack" },
  { icon: BarChart3, label: "Analytics", description: "Threat Intelligence" },
  { icon: Shield, label: "Monitoring", description: "Real-time Alerts" },
]

export function SystemArchitecture() {
  return (
    <section className="py-24 container mx-auto px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">System Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureNodes.map((node, index) => (
            <Card
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <node.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{node.label}</h3>
                <p className="text-muted-foreground">{node.description}</p>
              </div>

              {/* Connecting line effect */}
              {index < architectureNodes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">Data flows from honeypot → collection → analysis → visualization</p>
        </div>
      </div>
    </section>
  )
}
