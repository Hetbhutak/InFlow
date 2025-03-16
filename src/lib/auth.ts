import {
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  photoURL?: string | null;
  user_metadata?: {
    name?: string;
  };
};

export async function signOut() {
  await firebaseSignOut(auth);
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const user = auth.currentUser;
  if (!user) return null;

  return {
    id: user.uid,
    email: user.email || "",
    name: user.displayName || user.email?.split("@")[0] || "User",
    photoURL: user.photoURL,
    user_metadata: {
      name: user.displayName || user.email?.split("@")[0] || "User",
    },
  };
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return {
      user: {
        id: user.uid,
        email: user.email,
        name: user.displayName || user.email?.split("@")[0] || "User",
        photoURL: user.photoURL,
        user_metadata: {
          name: user.displayName || user.email?.split("@")[0] || "User",
        },
      },
    };
  } catch (error) {
    console.error("Error signing in with email:", error);
    throw error;
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string,
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Update the user's profile with the name
    if (user) {
      await updateProfile(user, {
        displayName: name,
      });
    }

    return {
      user: {
        id: user.uid,
        email: user.email,
        name: name,
        photoURL: user.photoURL,
        user_metadata: {
          name: name,
        },
      },
    };
  } catch (error) {
    console.error("Error signing up with email:", error);
    throw error;
  }
}

export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    return {
      user: {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        user_metadata: {
          name: user.displayName,
        },
      },
    };
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
}
