/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function LoginFormWithDescription() {
  return (
    <section className="bg-secondary-50 dark:bg-gray-900">
      
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center bg-linear-to-b from-black to-primary-900 px-4 py-6 sm:px-0 lg:py-0">
          <div className="max-w-md xl:max-w-xl">
            <a
              href="#"
              className="mb-4 flex items-center text-2xl font-light text-white"
            >
              <img
                className="mb-12 h-8"
                src="./aeyes-logo-text.svg"
                alt="logo"
              />
            </a>
            <h1 className="mb-6 text-3xl font-bold leading-none text-white xl:text-5xl">
              <span className="text-secondary-200">AI Assisted</span> Defect Detection
            </h1>
            <p className="mb-6 text-primary-200 lg:mb-8">
            Turn Every Inspection Into Intelligence - <br/>Fast, Accurate, and Effortless Reports Powered by AI
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
          <form
            className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
            action="#"
          >
            <h1 className="text-2xl font-bold text-primary-600 dark:text-white">
              Welcome back
            </h1>
            <div className="items-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
              <Button
                href="#"
                className="w-full bg-secondary-100 text-secondary-900 hover:bg-secondary-200 dark:hover:bg-gray-700 md:w-1/2"
              >
                <svg
                  aria-hidden
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13183_10121)">
                    <path
                      d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                      fill="#3F83F8"
                    />
                    <path
                      d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_10121">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Sign in with Google
              </Button>
              <Button
                href="#"
                className="w-full bg-secondary-100 text-secondary-900 hover:bg-secondary-200 dark:hover:bg-gray-700 md:w-1/2"
              >
                <svg
                  aria-hidden
                  className="mr-2 h-5 w-5 text-gray-900 dark:text-white"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13183_29163)">
                    <path
                      d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_29163">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Sign in with Apple
              </Button>
            </div>
            <div className="flex items-center">
              <div className="h-0.5 w-full bg-secondary-100 dark:bg-gray-700"></div>
              <div className="px-5 text-center text-secondary-300 dark:text-gray-400">
                or
              </div>
              <div className="h-0.5 w-full bg-secondary-100 dark:bg-gray-700"></div>
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block text-secondary-600 dark:text-white">
                Email
              </Label>
              <TextInput
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div>
              <Label htmlFor="password" className="mb-2 block dark:text-white">
                Password
              </Label>
              <TextInput
                id="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <Checkbox id="remember-description" required />
                </div>
                <div className="ml-3 text-sm">
                  <Label
                    htmlFor="remember-description"
                    className="text-secondary-400 dark:text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-800 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <Button type="button" className="w-full bg-primary-900 text-white hover:bg-primary-800">
              Sign in to your account
            </Button>
            <p className="text-sm font-medium text-secondary-600 dark:text-white">
              Don't have an account?&nbsp;
              <a
                href="./onboarding"
                className="font-medium text-primary-800 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
        
      </div>
    </section>
  );
}
