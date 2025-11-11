import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function LearningSection() {
  return (
    <section className="py-24 container mx-auto px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">What I Learned</h2>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">SIEM Integration & Log Management:</span> Designed and
                implemented a comprehensive logging pipeline that captures, parses, and forwards honeypot events to a
                centralized SIEM platform. Built custom correlation rules to detect attack patterns across multiple
                threat vectors and created automated alerting workflows for high-severity incidents.
              </p>

              <p>
                <span className="text-foreground font-semibold">Linux System Hardening:</span> Configured secure network
                segmentation and implemented defense-in-depth strategies including firewall rules, SELinux policies, and
                fail2ban integration. Established proper log rotation, secure SSH configurations, and real-time
                intrusion detection to maintain honeypot integrity while capturing malicious activity.
              </p>

              <p>
                <span className="text-foreground font-semibold">Threat Intelligence Analysis:</span> Developed automated
                enrichment workflows that correlate attacker IPs with threat intelligence feeds, geolocation data, and
                known malicious infrastructure. Analyzed attack TTPs (Tactics, Techniques, and Procedures) to identify
                emerging threats and botnet campaigns targeting specific services.
              </p>

              <p>
                <span className="text-foreground font-semibold">Real-Time Event Processing:</span> Built a scalable data
                pipeline using stream processing to handle high-volume attack traffic with minimal latency. Implemented
                event normalization, deduplication, and enrichment stages that transform raw honeypot logs into
                actionable security intelligence ready for analyst consumption.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
