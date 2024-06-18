import { useState } from "react";

async function loginUser(
  email: string,
  password: string,
  signal: AbortSignal,
  setIsLoading: (status: boolean) => void,
) {
  try {
    if (email?.length === 0 || password?.length === 0) return;
    setIsLoading(true);

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      {
        signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      },
    );

    return result.json();
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}

export function useLoging(
  signal: AbortSignal,
): [boolean, (email: string, password: string) => Promise<any>] {
  const [isLoading, setIsLoading] = useState(false);

  const login = (email = "", password = "") =>
    loginUser(email, password, signal, setIsLoading);
  return [isLoading, login];
}
