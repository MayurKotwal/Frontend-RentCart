// import React from 'react';

// const Footer = () => {
//   // Define inline CSS styles
  


//   const footerStyle = {
//     backgroundColor: 'white',
//     color: 'black',
//     padding: '20px',
//   };

//   const linkStyle = {
//     color: 'gray',
//     textDecoration: 'none',
//     marginRight: '10px',
//   };

//   const contactButtonStyle = {
//     marginRight: '5px',
//   };

//   const pinkLine = {
//     borderBottom: '10px solid pink',
//     margin: '20px 0',
//   };


//   return (
//     <footer style={footerStyle}>
//       <div className="container mx-auto text-center">
//       <div style={pinkLine}></div>
//         <p>&copy; 2025 RentPal. All rights reserved.</p>
//         <nav className="mt-2">
//           {/* Dynamic Services Links */}
//           <a style={linkStyle} href="#">Home</a>
//           <a style={linkStyle} href="#">About</a>
//           <a style={linkStyle} href="#">Rent Your Stuff</a>
//           <span style={linkStyle}></span>
//           <div className="mt-2">
//             {/* Add dynamic service links */}
//             {/* <a style={linkStyle} href="#">Property</a>
//             <a style={linkStyle} href="#">Events</a>
//             <a style={linkStyle} href="#">Gaming</a>
//             <a style={linkStyle} href="#">Photography</a>
//             <a style={linkStyle} href="#">Music</a>
//             <a style={linkStyle} href="#">Clothing</a>
//             <a style={linkStyle} href="#">Kitchen</a>
//             <a style={linkStyle} href="#">Books</a>
//             <a style={linkStyle} href="#">Transport</a>
//             <a style={linkStyle} href="#">Electronics</a>
//             <a style={linkStyle} href="#">Fitness</a> */}
//             {/* End of dynamic service links */}
//           </div>
//           <p></p>
//           <p></p>
//           <b></b>

//         </nav>
//         {/* Contact Details */}
        
//         <p><i>Contributed by Shreyash, Anurag, Mohit</i></p>
//         <p>Contact: 111111111</p>
//         {/* Dynamic Contact Buttons */}
//         <div>
//           {/* <a style={contactButtonStyle} href="#">Home Service</a>
//           <a style={contactButtonStyle} href="#">Service 1</a>
//           <a style={contactButtonStyle} href="#">Service 2</a>
//           <a style={contactButtonStyle} href="#">Service 3</a> */}
//           {/* Add more dynamic contact buttons here */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

export default function App() {
  return (
    <footer
      className="bg-neutral-100 text-center text-bl-600 dark:bg-black-600 dark:text-white-200 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a className="text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="black"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="blackr"
                className="mr-3 h-4 w-4">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              RentCart PVT Ltd
            </h6>
            <p>
            Introducing an innovative web application that allows users to rent anything they need with ease. The platform is built with the latest technologies, ensuring a seamless and user-friendly experience.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Party%20and%20Events'
              >Party & Events</a>
            </p>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Gaming'
              >Gaming</a>
            </p>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Photography'
              >Photography</a>
            </p>
            <p>
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Music'
              >Music</a>
            </p>
            
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Kitchen'
              >Kithcen</a>
            </p>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Books'
              >Books</a>
            </p>
            <p className="mb-4">
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Transport'
              >Transport</a>
            </p>
            <p>
              <a className="text-white-600 dark:text-white-200"
              href='https://rentpal.vercel.app/?category=Fitness'
              >Fitness</a>
            </p>
          </div>

        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-black-200 p-6 text-center dark:bg-bl-700">
        <span>© 2025 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://github.com/shreyashkadam/rentpal"
        >RentCart</a>
      </div>
    </footer>
  );
}