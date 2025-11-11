import { HeroSection } from "@/components/hero-section"
import { AttackFeed } from "@/components/attack-feed"
import { SystemArchitecture } from "@/components/system-architecture"
import { DetectionCapabilities } from "@/components/detection-capabilities"
import { DashboardAnalytics } from "@/components/dashboard-analytics"
import { LogOutput } from "@/components/log-output"
import { LearningSection } from "@/components/learning-section"
import { ProjectHighlights } from "@/components/project-highlights"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AttackFeed />
      <SystemArchitecture />
      <DetectionCapabilities />
      <DashboardAnalytics />
      <LogOutput />
      <LearningSection />
      <ProjectHighlights />
      <CallToAction />
    </main>
  )
}
