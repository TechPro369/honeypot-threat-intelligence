import { Zap, Globe, Video, Lock } from "lucide-react"

const highlights = [
  { icon: Zap, text: "Real-Time Event Pipeline" },
  { icon: Globe, text: "Threat Intelligence Enrichment" },
  { icon: Video, text: "Session Replay Capabilities" },
  { icon: Lock, text: "Secure Sandbox Environment" },
]

export function ProjectHighlights() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Project Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
