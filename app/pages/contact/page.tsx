"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+251 961505032", "+251 707855545"],
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["tadiostsegaye7@gmail.com", "contact@tadiostsegaye.com"],
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: ["Adama", "Available for remote work"],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="section-title text-gray-200">Get In Touch</h1>
            <p className="section-subtitle mx-auto">
              Ready to collaborate? Let&apos;s discuss your next project and bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-xl border border-black/60  p-6 rounded-xl text-gray-300 text-center">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold  text-gray-100 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/70 backdrop-blur-xl border border-black/60 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-200 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                    <Input
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                    <Input
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                      placeholder="your.email@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
                  <Input
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <Textarea
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-32"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="border-t-neutral-400 bg-gray-600 w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-black/70 backdrop-blur-xl border border-black/60 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-400 mb-6">Let&apos;s Connect</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind,
                  need creative consultation, or just want to connect, I&apos;d love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondery rounded-lg flex items-center justify-center text-gray-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">tadiostsegaye7@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-gray-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+251 961505032</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border mt-8 pt-8">
                  <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
                  <div className="flex gap-4">
                    <Button size="sm" className="btn-secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="btn-secondary">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="btn-secondary">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
