"use client";
import { useLoging } from "@/lib/hooks/useLogin";
import { FormEvent } from "react";

export default function Login() {
  const abortController: AbortController = new AbortController();
  const [isLoading, login] = useLoging(abortController.signal);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) {
      return abortController.abort();
    }

    const formData = new FormData(event.currentTarget);
    const emailEntry = formData.get("email");
    const passwordEntry = formData.get("password");

    const result = await login(
      `${emailEntry?.toString()}`,
      `${passwordEntry?.toString()}`,
    );
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form onSubmit={(e) => onSubmit(e)}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
