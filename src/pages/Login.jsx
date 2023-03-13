import React from "react";

const Login = () => {
  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form>
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              class="peer"
              placeholder=" "
              required
            />
            <label for="floating_email">Email address</label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="peer"
              name="floating_password"
              type="password"
              placeholder=" "
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button className="btn-danger" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
