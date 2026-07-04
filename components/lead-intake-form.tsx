export default function LeadIntakeForm() {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Submit Your Project</h2>
      <p className="text-slate-600 text-sm mb-6">
        Connect with vetted land professionals for your rural property project
      </p>

      <form 
        action="https://assets.mailerlite.com/jsonp/2342326/forms/192073939365659967/subscribe" 
        method="POST" 
        target="_blank"
        className="space-y-4"
      >
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fields[fullname]"
            required
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
            name="fields[email]"
            required
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
            name="fields[phone]"
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
            name="fields[state_county]"
            required
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
            name="fields[project_type]"
            required
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
            name="fields[project_description]"
            required
            rows={4}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            placeholder="Describe your project needs, timeline, and any specific requirements..."
          />
        </div>

        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Submit Request
        </button>
      </form>

      <p className="text-xs text-slate-500 mt-4 text-center">
        By submitting this form, you agree to receive communications from our network operators.
      </p>
    </div>
  )
}
