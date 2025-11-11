import { Card } from "@/components/ui/card"
import { Terminal, Bug, Scan, Code, Network } from "lucide-react"

const capabilities = [
  {
    icon: Terminal,
    title: "SSH Brute Force",
    description: "Captures credential stuffing attacks and brute force login attempts across SSH services.",
  },
  {
    icon: Bug,
    title: "Malware Analysis",
    description: "Detects and isolates malware drop attempts with automated sandbox analysis.",
  },
  {
    icon: Scan,
    title: "Botnet Detection",
    description: "Identifies automated scanning patterns and botnet command-and-control traffic.",
  },
  {
    icon: Code,
    title: "Web Exploitation",
    description: "Monitors for SQL injection, XSS, and remote code execution attempts.",
  },
  {
    icon: Network,
    title: "Network Enumeration",
    description: "Tracks port scanning, service fingerprinting, and reconnaissance activities.",
  },
]

export function DetectionCapabilities() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Detection Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl" />

              <div className="relative p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <capability.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
