import React from "react";
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <ReactToPdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <>
            <h1 className="text-2xl text-blue-700 w-fit mx-auto p-5 bg-gray-400 rounded-md">
              Need to download?
              <button
                className="ms-2 underline hover:text-red-500"
                onClick={toPdf}
              >
                Click Here
              </button>
            </h1>
          </>
        )}
      </ReactToPdf>
      <div ref={ref} className="lg:my-10 text-black">
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl text-blue-700 mb-2 ">
            1. The differences between uncontrolled and controlled components.
          </h1>
          <p className="text-base ms-8">
            In React, a <strong className="text-gray-700"> ontrolled </strong>
            element is an element that is controlled by the reaction state,
            while an <strong className="text-gray-700"> Uncontrolled </strong>
            element is an element that maintains its own internal state. <br />
            Controlled components refer to components whose state and behavior
            are controlled by the parent component. These components rely on
            props sent from the parent component to update their state and
            behavior. Uncontrolled components refer to components that
            internally manage their own state. They use a ref to access the
            current value of the DOM element and update the state accordingly.
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl text-blue-700 mb-2 ">
            2. How to validate React props using PropTypes?
          </h1>
          <p className="text-base ms-8">
            <strong className="text-gray-700">Props and Proptypes</strong> are
            important mechanisms for passing read-only properties between React
            components. We can use React props, short for properties, to pass
            data from one component to another. If a component gets props of the
            wrong type, it can cause bugs and unexpected errors in the app.
            While developing a React application, it needs to structure and
            define props to avoid bugs and errors. Just as a function can have
            mandatory arguments, a response element can require a prop to be
            defined, otherwise, it won't render correctly. Forgetting to pass a
            required prop to a component that needs it can cause the app to
            behave unexpectedly.
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl text-blue-700 mb-2 ">
            3. The difference between nodejs and express js.
          </h1>
          <p className="text-base ms-8">
            An extension of JavaScript,
            <strong className="text-gray-700"> NodeJS</strong> is an open-source
            server-side runtime environment built around the NodeJS language.
            Using a single-threaded approach to web loading and asynchronous
            programming, the framework has achieved great success in being
            high-performance and scalable. <br />
            <strong className="text-gray-700">ExpressJS</strong> is a framework
            for building web applications with NodeJS. Among the two options,
            this is the most significant difference. The ExpressJS development
            service framework provides several exceptional features that make
            web app development easy and fast.
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl text-blue-700 mb-2 ">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-base ms-8">
            <strong className="text-gray-700">Custom React JS hooks </strong>
            offer three main advantages over standard library hooks:
            reusability, readability, and testability. It can help developers
            save time, keep reliable, reusable and clean code. Creating custom
            React JS hooks is relatively easy, and one can search many open
            sources where some custom hooks are available from libraries already
            created by developers.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
