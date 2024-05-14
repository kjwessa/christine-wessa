export function ContactForm() {
  const formActionUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL;
  return (
    <div className="mx-auto max-w-4xl">
      <form
        action={formActionUrl}
        method="POST"
        target="_blank"
        className="space-y-4"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700">
              First Name
            </label>
            <input
              type="text"
              name="entry.878151725"
              placeholder="First Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              type="text"
              name="entry.947208125"
              placeholder="Last Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Contact Email
          </label>
          <input
            type="email"
            name="entry.215650103"
            placeholder="name@example.com"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="entry.1320803298"
            placeholder="e.g. (123) 456-7890"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700">
              Organization/Parish
            </label>
            <input
              type="text"
              name="entry.1714866494"
              placeholder="Austin Women's Conference"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700">
              Location
            </label>
            <input
              type="text"
              name="entry.441226641"
              placeholder="Austin, TX"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Your Message
          </label>
          <textarea
            name="entry.94188901"
            placeholder="Please provide as much information as possible about your upcoming event."
            className="mt-1 block h-32 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="w-full rounded-md bg-gray-950 px-4 py-2 text-white hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}