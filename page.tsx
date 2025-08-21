"use client";

import Image from 'next/image';
// Import the Button component from the components folder using a relative path.
// The '@' alias isn't configured in this project, so we reference the file directly.
import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Copilot</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-gray-800">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>
      </header>
      <section className="relative flex-1 flex items-center">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Empower Your Support Team
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI copilot assists your agents, speeds up response times, and
              improves customer satisfaction.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="relative w-full h-64 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?auto=format&fit=crop&w=1600&q=80"
              alt="AI assisting call center agents"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
      <section id="features" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Real‑Time Suggestions</h4>
              <p className="text-gray-600 text-sm">
                Get intelligent prompts and responses as you interact with
                customers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Contextual Summaries</h4>
              <p className="text-gray-600 text-sm">
                Quickly understand customer history and previous
                conversations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Seamless Integration</h4>
              <p className="text-gray-600 text-sm">
                Integrates smoothly with your existing call center platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">Pricing</h3>
          <p className="text-gray-600 mb-6">
            Flexible pricing plans to suit teams of all sizes.
          </p>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </section>
      <footer id="contact" className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3">© 2025 AI Copilot. All rights reserved.</p>
          <p>
            Reach us at{' '}
            <a href="mailto:info@example.com" className="underline">
              info@example.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}