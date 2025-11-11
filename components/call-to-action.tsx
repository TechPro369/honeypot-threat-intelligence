"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Github,
  FileText,
  Layers,
  X,
  Shield,
  Database,
  BarChart3,
  Server,
  Cloud,
  Activity,
  ArrowDown,
} from "lucide-react"
import { useState } from "react"

export function CallToAction() {
  const [showDiagram, setShowDiagram] = useState(false)
  const [showDocs, setShowDocs] = useState(false)

  return (
    <section className="py-24 container mx-auto px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm border-border text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Project</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dive into the source code, review the architecture documentation, or explore the system design that powers
            this threat intelligence platform.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto sm:min-w-[200px]"
              onClick={() => window.open("https://github.com/yourusername/honeypot-project", "_blank")}
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto sm:min-w-[200px] border-border hover:bg-secondary bg-transparent"
              onClick={() => setShowDocs(true)}
            >
              <FileText className="w-5 h-5" />
              Documentation
            </Button>
          </div>

          <Button
            variant="link"
            className="text-accent hover:text-accent/80 gap-2"
            onClick={() => setShowDiagram(true)}
          >
            <Layers className="w-4 h-4" />
            View Architecture Diagram
          </Button>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>Built with Next.js, React, and real-time data processing • Designed for security professionals</p>
        </footer>
      </div>

      {showDiagram && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDiagram(false)}
        >
          <Card
            className="w-full max-w-6xl max-h-[90vh] overflow-auto bg-card border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold">System Architecture Diagram</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowDiagram(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 md:p-8">
              <div className="space-y-8">
                {/* Architecture Flow Diagram */}
                <div className="bg-secondary/20 rounded-lg p-6 md:p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Data Flow Pipeline</h4>

                  {/* Row 1: Internet & Attackers */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-sm bg-destructive/10 border-2 border-destructive rounded-lg p-4 text-center">
                      <Shield className="w-12 h-12 text-destructive mx-auto mb-2" />
                      <h5 className="font-semibold text-lg">Internet Attackers</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Malicious actors scanning for vulnerabilities
                      </p>
                    </div>
                    <ArrowDown className="w-6 h-6 text-border my-4" />
                  </div>

                  {/* Row 2: Honeypot Services */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
                      <Server className="w-10 h-10 text-primary mx-auto mb-2" />
                      <h5 className="font-semibold">SSH Honeypot</h5>
                      <p className="text-xs text-muted-foreground mt-1">Port 22 - Cowrie</p>
                    </div>
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
                      <Server className="w-10 h-10 text-primary mx-auto mb-2" />
                      <h5 className="font-semibold">HTTP Honeypot</h5>
                      <p className="text-xs text-muted-foreground mt-1">Port 80/443 - WebTrap</p>
                    </div>
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
                      <Server className="w-10 h-10 text-primary mx-auto mb-2" />
                      <h5 className="font-semibold">FTP Honeypot</h5>
                      <p className="text-xs text-muted-foreground mt-1">Port 21 - FakeFTP</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-border my-4" />
                  </div>

                  {/* Row 3: Cloud Infrastructure */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-sm bg-accent/10 border-2 border-accent rounded-lg p-4 text-center">
                      <Cloud className="w-12 h-12 text-accent mx-auto mb-2" />
                      <h5 className="font-semibold text-lg">Cloud Infrastructure</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Isolated VPS environment with Docker containers
                      </p>
                    </div>
                    <ArrowDown className="w-6 h-6 text-border my-4" />
                  </div>

                  {/* Row 4: Data Collection */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-full max-w-md bg-secondary/40 border-2 border-border rounded-lg p-4 text-center">
                      <Database className="w-12 h-12 text-foreground mx-auto mb-2" />
                      <h5 className="font-semibold text-lg">Centralized Logging</h5>
                      <p className="text-sm text-muted-foreground mt-1">Filebeat → Logstash → Elasticsearch</p>
                    </div>
                    <ArrowDown className="w-6 h-6 text-border my-4" />
                  </div>

                  {/* Row 5: Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-accent/10 border-2 border-accent rounded-lg p-4 text-center">
                      <Activity className="w-10 h-10 text-accent mx-auto mb-2" />
                      <h5 className="font-semibold">SIEM Analysis</h5>
                      <p className="text-xs text-muted-foreground mt-1">Splunk/ELK Stack</p>
                    </div>
                    <div className="bg-accent/10 border-2 border-accent rounded-lg p-4 text-center">
                      <BarChart3 className="w-10 h-10 text-accent mx-auto mb-2" />
                      <h5 className="font-semibold">Threat Intelligence</h5>
                      <p className="text-xs text-muted-foreground mt-1">Pattern Detection & Alerts</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-border my-4" />
                  </div>

                  {/* Row 6: Output */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-lg bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
                      <BarChart3 className="w-12 h-12 text-primary mx-auto mb-2" />
                      <h5 className="font-semibold text-lg">Visualization Dashboard</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Kibana/Grafana - Real-time metrics and reports
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Stack */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-xl mb-4">Technology Stack</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Honeypot Framework</p>
                      <p className="text-sm text-muted-foreground">Cowrie, T-Pot, Dionaea</p>
                    </div>
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Infrastructure</p>
                      <p className="text-sm text-muted-foreground">AWS/DigitalOcean, Docker</p>
                    </div>
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Data Pipeline</p>
                      <p className="text-sm text-muted-foreground">Logstash, Filebeat</p>
                    </div>
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Analysis</p>
                      <p className="text-sm text-muted-foreground">Splunk, ELK Stack</p>
                    </div>
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Visualization</p>
                      <p className="text-sm text-muted-foreground">Kibana, Grafana</p>
                    </div>
                    <div className="bg-secondary/30 rounded p-4">
                      <p className="font-medium mb-1">Monitoring</p>
                      <p className="text-sm text-muted-foreground">Custom Alerting, REST APIs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {showDocs && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDocs(false)}
        >
          <Card
            className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-card border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold">Project Documentation</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowDocs(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Overview */}
              <section>
                <h4 className="text-xl font-semibold mb-3 text-primary">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This honeypot project is a comprehensive threat intelligence system designed to detect, log, and
                  analyze malicious activity across multiple attack vectors. By deploying decoy services that mimic real
                  infrastructure, the system captures attacker behavior in a controlled environment.
                </p>
              </section>

              {/* Setup & Deployment */}
              <section>
                <h4 className="text-xl font-semibold mb-3 text-primary">Setup & Deployment</h4>
                <div className="space-y-3">
                  <div className="bg-secondary/30 rounded p-4">
                    <p className="font-medium mb-2">1. Infrastructure Setup</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Deploy isolated cloud VPS (AWS EC2, DigitalOcean, or Vultr)</li>
                      <li>Configure firewall rules to allow specific ports</li>
                      <li>Install Docker and Docker Compose</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded p-4">
                    <p className="font-medium mb-2">2. Honeypot Installation</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Deploy T-Pot or individual honeypots (Cowrie, Dionaea)</li>
                      <li>Configure service emulation for SSH, HTTP, and FTP</li>
                      <li>Set up logging output to centralized collector</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded p-4">
                    <p className="font-medium mb-2">3. Data Collection Pipeline</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Install Elasticsearch for log storage</li>
                      <li>Configure Logstash for data parsing and enrichment</li>
                      <li>Set up Filebeat for log forwarding</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h4 className="text-xl font-semibold mb-3 text-primary">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-accent/10 border border-accent/30 rounded p-3">
                    <p className="font-medium mb-1">Real-time Attack Detection</p>
                    <p className="text-sm text-muted-foreground">
                      Immediate identification of scanning and exploitation attempts
                    </p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded p-3">
                    <p className="font-medium mb-1">Malware Capture</p>
                    <p className="text-sm text-muted-foreground">
                      Automatic collection and sandboxing of malicious payloads
                    </p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded p-3">
                    <p className="font-medium mb-1">Geolocation Tracking</p>
                    <p className="text-sm text-muted-foreground">IP-based attribution of attack sources</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded p-3">
                    <p className="font-medium mb-1">Pattern Analysis</p>
                    <p className="text-sm text-muted-foreground">ML-based detection of attack patterns and trends</p>
                  </div>
                </div>
              </section>

              {/* Security Considerations */}
              <section>
                <h4 className="text-xl font-semibold mb-3 text-primary">Security Considerations</h4>
                <div className="bg-destructive/10 border border-destructive/30 rounded p-4">
                  <ul className="text-sm space-y-2 list-disc list-inside">
                    <li className="text-foreground">Honeypots are isolated from production networks</li>
                    <li className="text-foreground">No sensitive data is stored on honeypot systems</li>
                    <li className="text-foreground">Regular security audits ensure honeypot integrity</li>
                    <li className="text-foreground">Outbound traffic is monitored to prevent lateral movement</li>
                  </ul>
                </div>
              </section>

              {/* Results & Insights */}
              <section>
                <h4 className="text-xl font-semibold mb-3 text-primary">Results & Insights</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Over the deployment period, the honeypot captured thousands of attack attempts, providing valuable
                  intelligence on attacker tactics, techniques, and procedures (TTPs).
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-secondary/30 rounded">
                    <p className="text-2xl font-bold text-primary">12K+</p>
                    <p className="text-xs text-muted-foreground">Attack Attempts</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded">
                    <p className="text-2xl font-bold text-accent">87</p>
                    <p className="text-xs text-muted-foreground">Countries</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded">
                    <p className="text-2xl font-bold text-primary">245</p>
                    <p className="text-xs text-muted-foreground">Unique Malware</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded">
                    <p className="text-2xl font-bold text-accent">99.8%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  For questions or collaboration opportunities, reach out via GitHub or LinkedIn
                </p>
              </section>
            </div>
          </Card>
        </div>
      )}
    </section>
  )
}
