'use client'

import { useState } from 'react'

export default function LeadIntakeForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    stateCounty: '',
    projectType: '',
    projectDescription: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // MailerLite JSONP submission
      const formId = '192073939365659967'
      const accountId = '2342326'
      const submitUrl = `https://assets.mailerlite.com/jsonp/${accountId}/forms/${formId}/subscribe`

      // Prepare form data for MailerLite
      const formDataToSend = new FormData()
      formDataToSend.append('fields[email]', formData.email)
      formDataToSend.append('fields[fullname]', formData.fullName)
      formDataToSend.append('fields[phone]', formData.phone)
      formDataToSend.append('fields[state_county]', formData.stateCounty)
      formDataToSend.append('fields[project_type]', formData.projectType)
      formDataToSend.append('fields[project_description]', formData.projectDescription)
      formDataToSend.append('ml-submit', '1')
      formDataToSend.append('anticsrf', 'true')

      // Use JSONP for cross-domain submission
      await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        const callbackName = `ml_webform_success_${formId}_${Date.now()}`
        
        // Define the callback function globally
        ;(window as any)[callbackName] = (data: any) => {
          if (data.success) {
            setSubmitStatus('success')
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              stateCounty: '',
              projectType: '',
              projectDescription: ''
            })
            resolve(data)
          } else {
            setSubmitStatus('error')
            setErrorMessage(data.error || 'Submission failed. Please try again.')
            reject(data)
          }
          // Clean up
          delete (window as any)[callbackName]
          document.body.removeChild(script)
        }

        script.src = `${submitUrl}?${new URLSearchParams(formDataToSend as any).toString()}&callback=${callbackName}`
        script.onerror = () => {
          setSubmitStatus('error')
          setErrorMessage('Network error. Please try again.')
          delete (window as any)[callbackName]
          document.body.removeChild(script)
          reject(new Error('Network error'))
        }
        
        document.body.appendChild(script)
      })

      // Also trigger the takel endpoint for analytics
      fetch(`https://assets.mailerlite.com/jsonp/${accountId}/forms/${formId}/takel`).catch(() => {})

    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Success!</h3>
        <p className="text-emerald-700">
          Our network operators have been notified and will review your project details shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-emerald-600 hover:text-emerald-800 font-medium text-sm"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Submit Your Project</h2>
      <p className="text-slate-600 text-sm mb-6">
        Connect with vetted land professionals for your rural property project
      </p>

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="stateCounty" className="block text-sm font-medium text-slate-700 mb-1">
            State & County *
          </label>
          <select
            id="stateCounty"
            name="stateCounty"
            required
            value={formData.stateCounty}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Select your county</option>
            <option value="TX - Travis">TX - Travis County</option>
            <option value="TX - Williamson">TX - Williamson County</option>
            <option value="TX - Hays">TX - Hays County</option>
            <option value="TX - Dallas">TX - Dallas County</option>
            <option value="TX - Bexar">TX - Bexar County</option>
          </select>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="">Select project type</option>
            <option value="Land Purchase">Land Purchase</option>
            <option value="Land Sale">Land Sale</option>
            <option value="Property Survey">Property Survey</option>
            <option value="Title Services">Title Services</option>
            <option value="Land Development">Land Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-1">
            Project Description *
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            required
            rows={4}
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            placeholder="Describe your project needs, timeline, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </form>

      <p className="text-xs text-slate-500 mt-4 text-center">
        By submitting this form, you agree to receive communications from our network operators.
      </p>
    </div>
  )
}
