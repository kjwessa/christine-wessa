export function ContactForm() {
  const formActionUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL;
  return (
    <div>
      <form action={formActionUrl} method="POST" target="_blank">
        <label>First Name</label>
        <input
          type="text"
          name="entry.878151725"
          placeholder="First Name"
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          name="entry.947208125"
          placeholder="Last Name"
          required
        />
        <label>Contact Email</label>
        <input
          type="email"
          name="entry.215650103"
          placeholder="name@example.com"
          required
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="entry.1320803298"
          placeholder="e.g. (123) 456-7890"
        />
        <label>Organization/Parish</label>
        <input
          type="text"
          name="entry.1714866494"
          placeholder="Austin Women's Conference"
          required
        />
        <label>Location</label>
        <input
          type="text"
          name="entry.441226641"
          placeholder="Austin, TX"
          required
        />
        <label>Your Message</label>
        <input
          type="textarea"
          name="entry.94188901"
          placeholder="Please provide as much information as possible about your upcoming event."
          required
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
