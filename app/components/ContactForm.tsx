export function ContactForm() {
  const formActionUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL;
  return (
    <div>
      <form action={formActionUrl} method="POST" target="_blank">
        <input
          type="text"
          name="entry.878151725"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="entry.215650103"
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="entry.1320803298"
          placeholder="Your Phone Number"
        />
        <input
          type="text"
          name="entry.94188901"
          placeholder="Your Message"
          required
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
