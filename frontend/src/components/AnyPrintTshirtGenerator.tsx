'use client'
import { useState, ChangeEvent } from 'react'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Loader2 } from "lucide-react"

export default function AnyPrintTshirtGenerator() {
  const [text, setText] = useState<string>('')
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGenerate = () => {
    if (text.trim()) {
      setIsLoading(true)
      // Simulate API call or image generation
      setTimeout(() => {
        setGeneratedDesigns((prev: string[]) => [...prev, text])
        setText('')
        setIsLoading(false)
      }, 3000) // 3 seconds delay to show loading animation
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Card className="mb-8 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-primary">Any Print</CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground">
            Turn your imagination into merch, and get it to your fans—zero hassle, all magic!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Enter T-shirt text"
            value={text}
            onChange={handleChange}
            aria-label="T-shirt text input"
          />
          <Button onClick={handleGenerate} className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate'
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedDesigns.length > 0 && (
        <div className="relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Generated Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {generatedDesigns.map((design, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={`T-shirt design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-lg font-bold text-primary bg-background bg-opacity-75 p-2 rounded text-center">
                        {design}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="relative aspect-square">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt={`T-shirt design ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-xl font-bold text-primary bg-background bg-opacity-75 p-3 rounded text-center">
                        {design}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="absolute inset-0 rainbow-gradient animate-gradient opacity-50"></div>
          <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center pointer-events-auto">
            <Loader2 className="h-12 w-12 text-primary animate-spin" />
            <p className="mt-4 text-lg font-semibold text-primary">Creating your magical design...</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .rainbow-gradient {
          background: linear-gradient(
            124deg,
            #ff2400,
            #e81d1d,
            #e8b71d,
            #e3e81d,
            #1de840,
            #1ddde8,
            #2b1de8,
            #dd00f3,
            #dd00f3
          );
          background-size: 1800% 1800%;
          backdrop-filter: blur(5px);
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  )
}