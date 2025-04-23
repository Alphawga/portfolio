"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ""
    })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: data.message || 'Your message has been sent successfully!'
      })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      })
    }
  }
  
  return (
    <>
      {formStatus.isSubmitted && !formStatus.isError ? (
        <div className="p-4 border border-[#BFA181]/30 rounded-md bg-[#BFA181]/10">
          <p className="text-[#F4F4F4] text-sm text-center">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
            className="mt-4 w-full bg-[#BFA181] text-[#1C1C1C] px-4 py-2 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[#D4C5B0] mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm"
                placeholder="Your name"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#D4C5B0] mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm"
                placeholder="Your email"
                required
                disabled={formStatus.isSubmitting}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-[#D4C5B0] mb-1 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm"
              placeholder="Your message"
              required
              disabled={formStatus.isSubmitting}
            ></textarea>
          </div>
          
          {formStatus.isError && (
            <div className="text-red-400 text-xs border border-red-400/30 rounded p-2 bg-red-400/10">
              {formStatus.message}
            </div>
          )}
          
          <button 
            type="submit" 
            className="bg-[#BFA181] text-[#1C1C1C] px-4 py-2 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm w-full"
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </>
  )
} 