import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">AI Copilot for Call Centers</h1>
        <p className="text-xl mb-8">
          Harness the power of AI to improve customer satisfaction and agent productivity.
        </p>
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?auto=format&fit=crop&w=1450&q=80"
            alt="Call center AI"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        <Button className="px-6 py-3 text-lg">Learn More</Button>
      </section>
    </main>
  )
}
