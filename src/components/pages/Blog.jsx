import React from 'react';
import Pdf from 'react-to-pdf';
import { useRef } from 'react';
import { FaArrowDown, FaFileDownload } from 'react-icons/fa';


const Blog = () => {
    const ref = useRef();
    
    return (
        <div className='md:mx-44 mx-8 my-20 '>
            <Pdf targetRef={ref} filename="document.pdf">
				{({ toPdf }) => (
					<button onClick={toPdf} className="flex bg-orange-300 p-3 rounded-sm my-5 hover:bg-orange-700 ms-2">
					<FaFileDownload className='me-1 w-3 mt-1'></FaFileDownload>	Generate PDF
					</button>
				)}
			</Pdf>

            <div ref={ref}> 
            <p className='font-serif text-lg font-semibold'>Question 1: Tell us the differences between uncontrolled and controlled components</p>
            <p className='font-serif text-lg mb-10'>Answer 1: When we use props to pass elements from parents to child components, it is described as a controlled component in react. It refers to components that have their state and behavior controlled by the parent component. On the other hand, createContext and useContext hook we use that are passing and managing elements internally. It shows components that manage their own state internally. To sum up, controlled components are those that are managed and regulated by the system, while uncontrolled components are those that operate independently and may be difficult to predict or control.</p>

            <p className='font-serif text-lg font-semibold'>Question 2: How to validate React props using PropTypes</p>
            <p className='font-serif text-lg mb-10'>Answer: PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking.PropTypes has many different types that we can use to validate our props, including string, number, boolean, array, object, and more. We can also define custom validation functions to handle more complex prop types.</p>

            <p className='font-serif text-lg font-semibold'>Question 3: Tell us the difference between nodejs and express js</p>
            <p className='font-serif text-lg mb-10'>Answer: Node.js and Express.js are two different technologies commonly used in building server-side applications in JavaScript. Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework that is built on top of Node.js</p>

            <p className='font-serif text-lg font-semibold'>Question 4: What is a custom hook, and why will you create a custom hook? </p>
            <p className='font-serif text-lg mb-5'>Answer: A custom hook is a reusable function in React that encapsulates logic that can be shared across multiple components. I will create Custom hooks  for extracting common code that will be used by multiple components into a separate function, which can then be reused across the application. It will make my code more modular and reusable.</p>
            </div>
           
        </div>
    );
};

export default Blog;