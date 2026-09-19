const databaseUrl = import.meta.env.VITE_FIREBASE_DATABASE_URL;

export async function submitContactForm(contactData) {
  const response = await fetch(`${databaseUrl}/contactSubmissions.json`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(contactData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form.");
  }

  const data = await response.json();

  return data;
}
