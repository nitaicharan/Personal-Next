import { useState } from "react";

async function registerUser(
  username: string,
  email: string,
  password: string,
  signal: AbortSignal,
  setIsLoading: (status: boolean) => void,
) {
  try {
    if (email?.length === 0 || password?.length === 0) return;
    setIsLoading(true);

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
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
            username,
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

export function useRegister(
  signal: AbortSignal,
): [
    boolean,
    (username: string, email: string, password: string) => Promise<any>,
  ] {
  const [isLoading, setIsLoading] = useState(false);

  const register = (email = "", password = "", username = "") =>
    registerUser(username, email, password, signal, setIsLoading);
  return [isLoading, register];
}
