import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-border">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
          className="animate-grid-move"
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
          Simulated Real-Time Data
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Real-Time Honeypot
          <br />
          <span className="text-primary">Threat Intelligence System</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          A sophisticated deception platform that captures live attack traffic, analyzes malicious behaviors, and
          provides actionable threat intelligence through real-time monitoring and advanced analytics.
        </p>
      </div>
    </section>
  )
}
