"use client";

export function ContactForm() {
  const formActionUrl = process.env.NEXT_PUBLIC_FORM_ACTION_URL;
  const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <div className="mx-auto w-full">
      <form
        action={formActionUrl}
        method="POST"
        className="space-y-4"
        data-basin-form
        data-basin-success-action="render"
        data-basin-spam-protection="turnstile"
        data-basin-success-id="form-success"
        data-basin-error-id="form-error"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. (123) 456-7890"
            className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Organization/Parish <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="organization"
              placeholder="Austin Women's Conference"
              className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Austin, TX"
              className="mt-1 block w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Please provide as much information as possible about your upcoming event."
            className="mt-1 block h-32 w-full rounded-md px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none"
            required
          />
        </div>
        <div className="cf-turnstile" data-sitekey={turnstileKey}></div>
        <button
          type="submit"
          value="Submit"
          className="w-full rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
      <div id="form-success" className="hidden">
        <p>Success content here</p>
      </div>
      <div id="form-error" className="hidden">
        <p>Failure content here</p>
      </div>
    </div>
  );
}
