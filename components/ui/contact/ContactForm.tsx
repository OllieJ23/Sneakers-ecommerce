import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

function ContactForm() {
  return (
    <section className="dark:white bg-white">
      <div className="mx-auto max-w-screen-md px-4 py-6">
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="text-md mb-2 block font-semibold text-darkBlue dark:text-darkBlue"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="dark:shadow-sm-light block w-full rounded-lg border-none bg-paleOrange p-2.5 text-sm text-gray-900 shadow-sm focus:outline-none dark:text-darkBlue dark:placeholder-gray-400"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-md mb-2 block font-semibold text-darkBlue dark:text-darkBlue"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block w-full rounded-lg border-none bg-paleOrange p-3 text-sm text-gray-900 shadow-sm focus:outline-none dark:text-darkBlue dark:placeholder-gray-400"
              placeholder="How can we help?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-md mb-2 block font-semibold text-darkBlue dark:text-darkBlue"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="block w-full rounded-lg border-none bg-paleOrange p-2.5 text-sm text-gray-900 shadow-sm focus:outline-none dark:text-darkBlue dark:placeholder-gray-400"
              placeholder="Leave a comment..."
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-tl from-darkOrange to-orange p-2 focus:outline-none "
          >
            <PaperAirplaneIcon width={28} fill="white" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
