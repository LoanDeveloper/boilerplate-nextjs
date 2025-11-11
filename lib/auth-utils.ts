// lib/auth-utils.ts
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth"; // Keep this for auth.api.signOut()

export async function getSession() {
  try {
    const response = await fetch("/api/session");
    if (!response.ok) {
      throw new Error("Failed to fetch session");
    }
    const session = await response.json();
    return session;
  } catch (error) {
    console.error("Error fetching session from API route:", error);
    return null;
  }
}

export async function signOut() {
  await auth.api.signOut();
  redirect("/sign-in"); // Redirect after sign out
}
