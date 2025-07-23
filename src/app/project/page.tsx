"use client"

import { useState, useEffect } from "react"
import {
  Play,
  Share2,
  Bookmark,
  Copy,
  Check,
  ExternalLink,
  Bitcoin,
  Globe,
  Shield,
  Target,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TooltipProvider, Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Enhanced project data
const projectData = {
  id: "angor1qq9ngpm2w8xss5sf0amt63z076y2x885wh0jfv7",
  title: "Network Effect",
  description:
    "Network Effect is a documentary series that dives into the lives of global Bitcoin communities, revealing how overlooked people are using decentralised tech to build their own futures—and challenging us to rethink what's possible.",
  avatar: "/placeholder.svg?height=80&width=80",
  bannerImage: "/placeholder.svg?height=400&width=800",
  status: "Successfully Funded",
  goalAmount: 0.06,
  raisedAmount: 0.061004,
  progressPercentage: 101.7,
  totalInvestors: 5,
  fundsSpent: 0,
  fundsSpentPercentage: 0,
  withdrawals: 0,
  withdrawalInvestors: 0,
  startDate: "June 6, 2025",
  endDate: "July 6, 2025",
  expiryDate: "December 31, 2025",
  duration: "1 month",
  penaltyPeriod: "90 days",
  founderKey: "03a99c3af2ccb37a9ccfe6408e4a17a7...",
  recoveryKey: "039c8e523aecc6dc385bb57e62e07790...",
  nostrNpub: "npub1las4ugdlpdvunf0ur8puw0rpnuy...",
  nip05: "",
  transactionId: "7f42da75e4b3dd92f9870aefa177c2fb3",
  bitcoinBlock: "900026",
  createdBy: "JennaReid_Docs",
  videoUrl: "https://www.youtube.com/embed/example",
  websiteUrl: "jennareid.xyz",
  fundingStages: [
    {
      stage: 1,
      date: "July 7, 2025",
      percentage: 50,
      amount: 0.03,
      status: "completed",
      description: "Pre-production and planning",
    },
    {
      stage: 2,
      date: "July 8, 2025",
      percentage: 45,
      amount: 0.027,
      status: "completed",
      description: "Filming and interviews",
    },
    {
      stage: 3,
      date: "July 10, 2025",
      percentage: 5,
      amount: 0.003,
      status: "completed",
      description: "Post-production and editing",
    },
  ],
  team: [
    {
      name: "Jenna Reid",
      role: "Director & Producer",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "JennaReid_Docs",
    },
  ],
  acknowledgments: [
    "0.02 BTC = brand/name mention in title and end credits",
    "0.01 BTC = brand/name mention in end credits",
    "All donations of all amounts are appreciated",
  ],
}

export default function ProjectView() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Set initial theme using 'dark' class
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground transition-all duration-300">
        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="sm"
            className="rounded-full w-12 h-12 p-0 shadow-lg border-2 border-custom bg-card hover:bg-surface-hover transition-all duration-300"
            style={{
              backgroundColor: "var(--surface-card)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Beautiful Banner */}
        <div
          className="relative h-64 md:h-80 w-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              className="rounded-full backdrop-blur-sm text-white border-white/30 hover:scale-105 transition-all duration-300 bg-transparent"
              variant="outline"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              Banner
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Header Block */}
              <Card
                className="rounded-xl shadow-lg border-custom transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Avatar className="h-20 w-20 ring-2 ring-accent">
                      <AvatarImage src={projectData.avatar || "/placeholder.svg"} alt={projectData.title} />
                      <AvatarFallback
                        className="text-lg font-semibold"
                        style={{
                          color: "var(--header-text)",
                        }}
                      >
                        NE
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h1 className="text-2xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                            {projectData.title}
                          </h1>
                          <Badge
                            variant="secondary"
                            className="text-xs"
                            style={{
                              backgroundColor: "var(--success)",
                              color: "white",
                            }}
                          >
                            Funded
                          </Badge>
                        </div>
                        <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {projectData.description}
                        </p>
                        <div
                          className="flex items-center gap-2 mt-2 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <Globe className="h-4 w-4" />
                          <span className="hover:text-accent-light transition-colors cursor-pointer">
                            {projectData.websiteUrl}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button
                          size="sm"
                          className=" font-medium shadow-lg hover:scale-105 transition-all duration-300"
                          style={{
                            backgroundColor: "var(--accent)",
                            color: "white",
                          }}
                        >
                          {/* <Bitcoin className="h-4 w-4 mr-2" /> */}
                          Invest with Angor Wallet
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-custom hover:bg-surface-hover transition-all duration-300 bg-transparent"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-custom hover:bg-surface-hover transition-all duration-300 bg-transparent"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                        >
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Total Raised */}
                <Card className="rounded-lg border shadow-lg border-[var(--border)] bg-[var(--surface-card)] p-0 flex flex-col justify-between">
                  <CardContent className="flex flex-col w-full px-4 py-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--surface-hover)] shadow-sm">
                        <Target className="size-5 text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">Raised</div>
                        <div className="text-base font-semibold text-[var(--text)] leading-tight">
                          {projectData.raisedAmount} <span className="text-xs font-normal text-[var(--text-secondary)]">BTC</span>
                        </div>
                        <div className="text-[10px] text-[var(--text-secondary)]">{projectData.progressPercentage}%</div>
                      </div>
                    </div>
                    <div className="w-full flex items-center gap-2 mt-2">
                      <div className="flex-1">
                        <div className="h-1 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${Math.min(projectData.progressPercentage, 100)}%`,
                              backgroundColor: "var(--text-secondary)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Total Investors */}
                <Card className="rounded-lg border shadow-lg border-[var(--border)] bg-[var(--surface-card)] p-0 flex flex-col justify-between">
                  <CardContent className="flex flex-col w-full px-4 py-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--surface-hover)] shadow-sm">
                        <Users className="size-5 text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">Investors</div>
                        <div className="text-base font-semibold text-[var(--text)] leading-tight">{projectData.totalInvestors}</div>
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5">Supporters</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Founder Spent */}
                <Card className="rounded-lg border shadow-lg border-[var(--border)] bg-[var(--surface-card)] p-0 flex flex-col justify-between">
                  <CardContent className="flex flex-col w-full px-4 py-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--surface-hover)] shadow-sm">
                        <TrendingUp className="size-5 text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">Spent</div>
                        <div className="text-base font-semibold text-[var(--text)] leading-tight">
                          {projectData.fundsSpent} <span className="text-xs font-normal text-[var(--text-secondary)]">BTC</span>
                        </div>
                        {/* <div className="text-[10px] text-[var(--text-secondary)]">{projectData.fundsSpentPercentage}%</div> */}
                        <div className="text-[10px] text-[var(--text-secondary)]">{20}%</div>
                      </div>
                    </div>
                    <div className="w-full flex items-center gap-2 mt-2">
                      <div className="flex-1">
                        <div className="h-1 rounded-full bg-[var(--surface-hover)] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              // width: `${projectData.fundsSpentPercentage}%`,
                              width: `20%`,
                              backgroundColor: "var(--text-secondary)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Withdrawals */}
                <Card className="rounded-lg border shadow-lg border-[var(--border)] bg-[var(--surface-card)] p-0 flex flex-col justify-between">
                  <CardContent className="flex flex-col w-full px-4 py-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--surface-hover)] shadow-sm">
                        <AlertTriangle className="size-5 text-[var(--text-secondary)]" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">Withdrawals</div>
                        <div className="text-base font-semibold text-[var(--text)] leading-tight">{projectData.withdrawals}</div>
                        <div className="text-[10px] text-[var(--text-secondary)] mt-0.5">BTC</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Success Status */}
              <Card
                className="rounded-xl shadow-lg p-0 transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderTop: `1px solid var(--border)`,
                  borderRight: `1px solid var(--border)`,
                  borderBottom: `1px solid var(--border)`,
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="size-8 rounded-lg mt-1 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--success)" }}
                    >
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                          Project Successfully Funded
                        </h2>
                        <div className="text-right">
                          <div className="text-sm font-medium" style={{ color: "var(--success)" }}>
                            {projectData.progressPercentage}% Complete
                          </div>
                          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            {projectData.raisedAmount} of {projectData.goalAmount} BTC
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                        Exceeded funding goal with {projectData.totalInvestors} investors contributing{" "}
                        {projectData.raisedAmount} BTC
                      </p>
                      <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Ended {projectData.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Duration: {projectData.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Block */}
              <Card className="rounded-2xl shadow-2xl border border-[var(--border)] p-3 bg-[var(--surface-card)] overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between gap-4 p-6 pb-1">
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight text-[var(--text)]">Network Effect (WT) teaser for BFF</CardTitle>
                    <CardDescription className="text-[var(--text-secondary)]">Documentary series by Jenna Reid</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-[var(--border)] cursor-pointer text-[var(--text)] bg-transparent hover:bg-[var(--surface-hover)] transition-all duration-300"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy link
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div
                    className="relative group cursor-pointer border rounded-lg"
                    style={{ aspectRatio: "16/7" }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3 text-white">
                        <div className="w-16 h-16 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 bg-black mx-auto">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Network Effect (WT)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold bg-[#ff0000] shadow-lg">YouTube</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-xl shadow-lg border-custom p-0 transition-all duration-300 bg-card border-border">
                <CardContent className="p-0">
                  <Tabs defaultValue="project" className="w-full">
                    <TabsList
                      className="grid w-full h-12 grid-cols-3 rounded-t-xl bg-surface-hover rounded-b-none"
                    >
                      <TabsTrigger
                        value="project"
                        className="rounded-tl-xl  data-[state=active]:text-white data-[state=active]:bg-white dark:data-[state=active]:bg-accent cursor-pointer"
                      >
                        Project
                      </TabsTrigger>
                      <TabsTrigger value="faq" className=" data-[state=active]:text-white data-[state=active]:bg-white dark:data-[state=active]:bg-accent cursor-pointer">
                        FAQ
                      </TabsTrigger>
                      <TabsTrigger
                        value="updates"
                        className="rounded-tr-xl  data-[state=active]:text-white data-[state=active]:bg-white dark:data-[state=active]:bg-accent cursor-pointer"
                      >
                        Updates
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="project" className="p-2 space-y-2">
                      <AboutthisProject />
                    </TabsContent>
                    <TabsContent value="faq" className="p-4 space-y-2">
                      <h4 className="font-medium" style={{ color: "var(--text)" }}>
                        Frequently Asked Questions
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Common questions about funding, timeline, and project goals.
                      </p>
                    </TabsContent>
                    <TabsContent value="updates" className="p-4 space-y-2">
                      <h4 className="font-medium" style={{ color: "var(--text)" }}>
                        Project Updates
                      </h4>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Latest progress reports and announcements from the team.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Team Section */}
              <Card
                className="rounded-xl shadow-lg border-custom transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    Project Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {projectData.team.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center border gap-3 p-3 rounded-xl border-custom hover:bg-surface-hover transition-all duration-300">
                        <Avatar className="h-12 w-12 ring-2 ring-accent">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback className="font-medium"> J </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-medium" style={{ color: "var(--text)" }}>
                            {member.name}
                          </h4>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                            {member.role}
                          </p>
                          <p className="text-xs" style={{ color: "var(--accent-light)" }}>
                            @{member.handle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Timeline */}
              <Card
                className="rounded-xl shadow-lg border-custom transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    Project Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                            Started
                          </span>
                          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            1 month ago
                          </span>
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                          {projectData.startDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--success)" }} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                            Completed
                          </span>
                          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            9 days ago
                          </span>
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                          {projectData.endDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2">
                      <div
                        className="w-2 h-2 rounded-full border-2"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "var(--text-secondary)",
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                            Expires
                          </span>
                          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                            5 months
                          </span>
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                          {projectData.expiryDate}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4" style={{ color: "var(--warning)" }} />
                      <span style={{ color: "var(--text-secondary)" }}>
                        Penalty period: {projectData.penaltyPeriod}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Funding Stages */}
              <Card
                className="rounded-xl shadow-lg border-border bg-card border-custom transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    Funding Stages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    {projectData.fundingStages.map((stage, index) => (
                      <div key={index} className="relative flex items-center min-h-[88px]">
                        {/* Timeline column with check */}
                        <div className="relative flex flex-col items-center justify-center mr-4" style={{ minWidth: 32 }}>
                          {/* Check circle */}
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium z-10"
                            style={{
                              backgroundColor: "var(--success)",
                              border: "2px solid var(--success)",
                              marginTop: 0,
                              marginBottom: 0,
                            }}
                          >
                            <Check className="h-3 w-3" />
                          </div>
                        </div>
                        {/* Stage content */}
                        <div className="flex-1 min-w-0 p-3 rounded-lg transition-all duration-300">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm" style={{ color: "var(--text)" }}>
                              Stage {stage.stage}
                            </span>
                            <Badge
                              variant="outline"
                              className="text-xs text-white"
                              style={{
                                backgroundColor: "var(--success)",
                                borderColor: "var(--success)",
                              }}
                            >
                              Complete
                            </Badge>
                          </div>
                          <div className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
                            {stage.description}
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span style={{ color: "var(--text-secondary)" }}>{stage.date}</span>
                            <span className="font-medium" style={{ color: "var(--text)" }}>
                              {stage.percentage}% • {stage.amount} BTC
                            </span>
                          </div>
                          <div className="mt-2">
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{ backgroundColor: "var(--border)" }}
                            >
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: "100%",
                                  backgroundColor: "var(--success)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>


              <div className="mt-4 p-5 rounded-xl shadow-lg border-border bg-card border-custom transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm" style={{ color: "var(--text)" }}>
                    Overall Progress
                  </span>
                  <span className="font-bold" style={{ color: "var(--success)" }}>
                    100%
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--success)",
                    }}
                  />
                </div>
              </div>

              {/* Blockchain Details */}
              <Card
                className="rounded-xl shadow-lg border-custom transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    Public Keys & IDs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Project ID", value: projectData.id, key: "projectId" },
                    { label: "Founder Key", value: projectData.founderKey, key: "founderKey" },
                    { label: "Recovery Key", value: projectData.recoveryKey, key: "recoveryKey" },
                    { label: "Nostr npub", value: projectData.nostrNpub, key: "nostrNpub" },
                    { label: "Transaction ID", value: projectData.transactionId, key: "transactionId" },
                  ].map((item) => (
                    <div key={item.key}>
                      <label
                        className="text-xs font-medium uppercase tracking-wide mb-2 block"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.label}
                      </label>
                      <div className="flex gap-2">
                        <Input
                          value={item.value}
                          readOnly
                          className="text-xs font-mono border-custom transition-all duration-300"
                          style={{
                            
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                        />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="sm"
                              onClick={() => copyToClipboard(item.value, item.key)}
                              className="border-custom cursor-pointer hover:bg-surface-hover transition-all duration-300"
                              style={{
                                backgroundColor: "var(--surface-hover)",
                                borderColor: "var(--border)",
                                color: "var(--text)",
                                height: "35px", // Match Input height (default Input is h-10 = 40px)
                                minWidth: "40px", // Optional: make it square if you want
                                padding: 0, // Remove extra padding for icon alignment
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {copiedField === item.key ? (
                                <Check className="h-4 w-4" style={{ color: "var(--success)" }} />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </TooltipTrigger>
                        </Tooltip>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    <div
                      className="flex items-center justify-between p-3 border rounded-lg transition-all duration-300"
                      style={{
                        borderColor: "var(--border)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Bitcoin className="h-4 w-4" style={{ color: "var(--bitcoin-mainnet)" }} />
                        <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                          Bitcoin Block
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm text-bitcoin">
                          {projectData.bitcoinBlock}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nostr Section */}
              <Card
                className="rounded-xl shadow-lg border-custom transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-card)",
                  borderColor: "var(--border)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    Nostr
                  </CardTitle>
                  <CardDescription style={{ color: "var(--text-secondary)" }}>
                    Lookup project on Nostr network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full border-custom border hover:bg-surface-hover transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>nostr.at</span>
                  </Button>
                  <p className="text-xs text-center mt-4" style={{ color: "var(--text-secondary)" }}>
                    Do you find this project problematic? Click button to report:
                  </p>
                  <div className="flex justify-center mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-surface-hover border border-red-500 transition-all duration-300"
                      style={{ color: "var(--warning)" }}
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t transition-all duration-300" style={{ borderColor: "var(--border)" }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-4">
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 hover:text-accent-light transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Terms of Service
                </Button>
                <span style={{ color: "var(--text-secondary)" }}>•</span>
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 hover:text-accent-light transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Privacy Policy
                </Button>
              </div>
              <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <Shield className="h-4 w-4" />
                <span>Angor Hub v0.1.127</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </TooltipProvider>
  )
}



function AboutthisProject() {
  return (
    <Card
    className="rounded-xl shadow-none border-0  transition-all duration-300"
    style={{
      backgroundColor: "var(--surface-card)",
    }}
  >
    <CardHeader>
      <CardTitle className="text-xl font-medium tracking-tight" style={{ color: "var(--text)" }}>
        About This Project
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3 border-0 shadow-none">

      <div>
        <h3 className="font-medium mb-2" style={{ color: "var(--text)" }}>
          About the Series
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Network Effect is a documentary series of character-driven films that serves as a platform for
          people from around the world to share their stories—connected by a common thread. Community and
          freedom technologies like Bitcoin come together to create alternatives to the current, broken
          system.
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-2" style={{ color: "var(--text)" }}>
          Why Now?
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          We&apos;re living through economic uncertainty, political instability, and a rising distrust in
          institutions. While many feel powerless, &quot;Network Effect&quot; offers stories of resilience and hope,
          by showing how a growing number of overlooked communities are quietly opting out—using tools like
          Bitcoin to take back control of their lives.
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-2" style={{ color: "var(--text)" }}>
          What Makes This Different
        </h3>
        <div className="space-y-3">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <strong style={{ color: "var(--text)" }}>This is not a tech explainer.</strong>
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Ultimately, Bitcoin is a tool to give more power to the people, and yet stories of people are
            rarely at the centre of mainstream narratives about bitcoin.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
            <strong style={{ color: "var(--text)" }}>Were here to fix that.</strong>
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Each episode is rooted in real lives and real impact. The films will be told by the people
            sharing their stories. Personality-driven.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2" style={{ color: "var(--text)" }}>
          Why We Need You
        </h3>
        <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          We&apos;re independently producing this series, and we need your support to:
        </p>
        <ul className="space-y-2 text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          <li>
            <strong style={{ color: "var(--text)" }}>- Film with communities across the globe:</strong> The
            next episode I want to film is with Meron Estefanos, a Swedish-Eritrean human rights activist
            who used Bitcoin to combat human trafficking in Eritrea, now runs the Bitcoin Innovation Hub in
            Kampala, creating opportunities for financial empowerment for refugees living outside the
            traditional banking system.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>- Edit the films</strong> and work with a talented
            production team to make it the best it can be
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>- Share these stories far and wide!</strong>
          </li>
        </ul>
      </div>

      
    </CardContent>
  </Card>
  )
}

