const databaseUrl = import.meta.env.VITE_FIREBASE_DATABASE_URL;
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const authUrl = "https://identitytoolkit.googleapis.com/v1/accounts";

// -------------------------
// SIGN UP
// -------------------------

export async function signUpUser({ firstName, lastName, email, password }) {
  const response = await fetch(`${authUrl}:signUp?key=${apiKey}`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(getFirebaseError(data.error?.message));
  }

  // Firebase gives us the user's unique ID
  const userId = data.localId;

  // Save additional user information
  await fetch(`${databaseUrl}/users/${userId}.json?auth=${data.idToken}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      firstName,
      lastName,
      email,
    }),
  });

  return data;
}

// -------------------------
// LOGIN
// -------------------------

export async function loginUser(email, password) {
  const response = await fetch(`${authUrl}:signInWithPassword?key=${apiKey}`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(getFirebaseError(data.error?.message));
  }

  return data;
}

// -------------------------
// CONTACT FORM
// -------------------------

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

// -------------------------
// FIREBASE ERROR MESSAGES
// -------------------------

function getFirebaseError(errorCode) {
  switch (errorCode) {
    case "EMAIL_EXISTS":
      return "An account with this email already exists.";

    case "INVALID_EMAIL":
      return "Please enter a valid email address.";

    case "WEAK_PASSWORD":
      return "Password must be at least 6 characters.";

    case "EMAIL_NOT_FOUND":
      return "No account was found with this email.";

    case "INVALID_PASSWORD":
      return "Incorrect password.";

    case "INVALID_LOGIN_CREDENTIALS":
      return "Incorrect email or password.";

    case "USER_DISABLED":
      return "This account has been disabled.";

    default:
      return "Something went wrong. Please try again.";
  }
}
