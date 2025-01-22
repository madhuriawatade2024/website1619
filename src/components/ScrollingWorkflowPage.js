import React, { useState } from "react";
import "./ScrollingWorkflowPage.css"; 

const ScrollingWorkflowPage = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="scroll-container">
     
      <div className="horizontal-headline">
        Full Stack Workflow Overview
      </div>

      
      <div className="content-section">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`content-block ${selectedStep === index ? "highlighted" : ""}`}
            onClick={() => setSelectedStep(index)}
          >
            <h2 className="section-title">
              {["React Frontend", "Spring Boot Backend", "Java", "Communication", "Deployment"][index]}
            </h2>
            <p>
              {index === 0 && (
                <>
                  <strong>React Frontend:</strong><br />
                  - Component-based architecture: Break down the UI into reusable components for maintainability.<br />
                  - State management with Redux or Context API: Use Redux for complex state management or React's built-in Context API for simpler use cases.<br />
                  - React Hooks: Leverage hooks like useState, useEffect, useContext, and custom hooks to manage state and side effects in a more concise and functional way.<br />
                  - Axios or Fetch for API calls: Use Axios or the native Fetch API to make asynchronous HTTP requests to your Spring Boot backend.
                </>
              )}
              {index === 1 && (
                <>
                  <strong>Spring Boot Backend:</strong><br />
                  - RESTful APIs: Use Spring Web to expose RESTful APIs, which your React frontend can interact with.<br />
                  - Security with Spring Security: Secure your APIs with authentication (JWT tokens, OAuth2) and authorization to ensure that only authorized users can access certain resources.<br />
                  - JPA/Hibernate for Database Interaction: Use Spring Data JPA with Hibernate to map Java objects to database tables for easy persistence management.<br />
                  - Exception Handling: Implement centralized exception handling with @ControllerAdvice to return consistent error responses.
                </>
              )}
              {index === 2 && (
                <>
                  <strong>Java:</strong><br />
                  - Concurrency with Java Threads: Use Java’s concurrency features to handle background tasks like data fetching or heavy computations.<br />
                  - Unit Testing: Write unit tests with JUnit and Mockito to ensure that both the backend logic and frontend components are well-tested.<br />
                  - Java 8+ Features: Utilize features like Streams, Optional, and lambdas for cleaner and more efficient code.
                </>
              )}
              {index === 3 && (
                <>
                  <strong>Communication between React and Spring Boot:</strong><br />
                  - CORS Configuration: Make sure to configure CORS (Cross-Origin Resource Sharing) in Spring Boot so that your React app, running on a different port or domain during development, can communicate with the backend.<br />
                  - Asynchronous APIs: Use @Async in Spring Boot for non-blocking requests and improve the performance of your backend services.
                </>
              )}
              {index === 4 && (
                <>
                  <strong>Deployment:</strong><br />
                  - Docker: Containerize both your React and Spring Boot applications with Docker for easy deployment and scaling.<br />
                  - CI/CD: Set up Continuous Integration and Continuous Deployment pipelines using tools like GitHub Actions, Jenkins, or GitLab CI to automate testing and deployment processes.
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWorkflowPage;
