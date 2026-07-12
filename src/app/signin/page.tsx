// "use client";
// import { Input, Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
// import { useState } from "react";

// export default function SignInPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleGoogleLogin = () => {
   
//     console.log("Google Login clicked");
//   };

//   const handleSignIn = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-default-50">
//       <Card className="w-full max-w-sm p-4">
//         <CardHeader className="flex flex-col items-start px-4 pb-0 pt-4">
//           <h1 className="text-2xl font-bold">Sign In</h1>
//           <p className="text-small text-default-500">Enter your details to access your account</p>
//         </CardHeader>
//         <CardBody className="gap-4">
//           <form onSubmit={handleSignIn} className="flex flex-col gap-4">
//             <Input 
//               isRequired
//               label="Email" 
//               type="email" 
//               variant="bordered"
//               value={email}
//               onValueChange={setEmail}
//             />
//             <Input 
//               isRequired
//               label="Password" 
//               type="password" 
//               variant="bordered"
//               value={password}
//               onValueChange={setPassword}
//             />
//             <Button type="submit" color="primary" fullWidth>
//               Sign In
//             </Button>
//           </form>

//           <div className="flex items-center gap-4 py-2">
//             <Divider className="flex-1" />
//             <span className="text-tiny text-default-400">OR</span>
//             <Divider className="flex-1" />
//           </div>

//           <Button 
//             variant="bordered" 
//             fullWidth 
//             onPress={handleGoogleLogin}
//             startContent={<svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.25v2.8h5.3c-.5 2.5-2.8 4.2-5.3 4.2-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3.1.6 4.2 1.7l2.1-2.1C15.6 2.6 13.9 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c4.8 0 8.8-3.4 9.6-8.1H21.35z"/></svg>}
//           >
//             Continue with Google
//           </Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

"use client";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { useState } from "react";
import { Icon } from "@iconify/react"; // গুগল আইকনের জন্য এটি ব্যবহার করব

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 font-sans">
      <Card className="w-full max-w-md p-8 shadow-xl rounded-3xl border border-gray-100">
        <CardHeader className="flex flex-col items-center gap-2 pb-8 pt-4">
          <h1 className="text-3xl font-bold text-[#00897B]">Welcome Back</h1>
          <p className="text-base text-gray-500">Log in to manage your tutoring sessions</p>
        </CardHeader>
        
        <CardBody className="gap-6 px-2">
          {/* Email Field */}
          <Input 
            label="Email Address" 
            placeholder="you@example.com" 
            variant="bordered"
            radius="lg"
            classNames={{
              label: "text-gray-600 font-medium",
              inputWrapper: "border-gray-200 hover:border-gray-300 transition-colors",
              input: "text-gray-800",
            }}
          />
          
          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <Input 
              label="Password" 
              type={isVisible ? "text" : "password"}
              placeholder="••••••••" 
              variant="bordered"
              radius="lg"
              classNames={{
                label: "text-gray-600 font-medium",
                inputWrapper: "border-gray-200 hover:border-gray-300 transition-colors",
                input: "text-gray-800",
              }}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                  {isVisible ? (
                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="solar:eye-bold" />
                  ) : (
                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="solar:eye-closed-bold" />
                  )}
                </button>
              }
            />
            <a href="#" className="text-sm text-[#00897B] self-end font-semibold hover:text-[#00695C] transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <Button 
            className="bg-[#00897B] text-white font-bold text-lg h-12 mt-2 hover:bg-[#00695C] transition-colors shadow-md" 
            radius="lg" 
            fullWidth
          >
            Sign In
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-4 py-3">
            <Divider className="flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400 font-medium">OR</span>
            <Divider className="flex-1 bg-gray-200" />
          </div>

          {/* Google Login Button */}
          <Button 
            variant="bordered" 
            radius="lg" 
            fullWidth 
            className="h-12 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center gap-3"
            startContent={
              <Icon icon="flat-color-icons:google" className="text-2xl" />
            }
          >
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="text-base text-center text-gray-600 mt-6">
            Don't have an account? {" "}
            <a href="#" className="text-[#00897B] font-bold hover:text-[#00695C] transition-colors">
              Register here
            </a>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}