// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
      <p className="mb-6">Schreib uns gerne eine Nachricht:</p>

      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Dein Name"
          className="border rounded p-2"
        />
        <input
          type="email"
          placeholder="Deine E-Mail"
          className="border rounded p-2"
        />
        <textarea
          placeholder="Deine Nachricht"
          rows={5}
          className="border rounded p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Absenden
        </button>
      </form>
    </main>
  );
}
