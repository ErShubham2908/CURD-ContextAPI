import React from "react";

function Home() {
    return (
        <div>
            <h1>Project description</h1>
            {/* <div className="dDesc"> */}
            <div className="dDesc">
                <p className="pTopic">1. Project Overview</p>
                <p className="pDesc">
                    Create a dynamic web application using React that leverages
                    React Routes and the Context API to implement CRUD (Create,
                    Read, Update, Delete) operations on data. The project
                    emphasizes a user-friendly interface across all devices,
                    ensuring responsive design for various screen sizes.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">2. Technology Stack</p>
                <p className="pDesc">
                    The project employs React for building the user interface,
                    React Routes for handling navigation, and the Context API
                    for managing global state. This combination enables seamless
                    interaction and updates within the application.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">3. CRUD Functionality</p>
                <p className="pDesc">
                    Users can perform Create, Read, Update, and Delete
                    operations on data through intuitive and accessible user
                    interfaces. Creating new entries, modifying existing data,
                    and removing records are core features of the application.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">4. Context API for State Management</p>
                <p className="pDesc">
                    The Context API is utilized to maintain a centralized state,
                    making data accessible to various components without the
                    need for prop drilling. This ensures efficient management of
                    data throughout the app.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">5. Responsive Design</p>
                <p className="pDesc">
                    The application is designed to be responsive across
                    different screen sizes and devices. Through the use of
                    responsive CSS techniques and media queries, the user
                    experience remains consistent and engaging regardless of the
                    device being used.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">6. User-friendly Navigation</p>
                <p className="pDesc">
                    React Routes provide seamless navigation between different
                    sections of the application. This enhances user experience
                    by allowing users to explore and interact with different
                    parts of the app without experiencing page reloads.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">7. Data Display</p>
                <p className="pDesc">
                    The app features a visually appealing display of data,
                    utilizing components that present information in an
                    organized and easily understandable format. Users can
                    effortlessly view the stored data.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">8. Data Editing and Updating</p>
                <p className="pDesc">
                    Users can modify and update existing data entries using
                    intuitive forms and interfaces. This enables users to keep
                    their records up to date based on their needs.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">9. Data Deletion</p>
                <p className="pDesc">
                    The application allows users to delete data entries with a
                    simple interaction. Built-in confirmation mechanisms prevent
                    accidental data loss.
                </p>
            </div>

            <div className="dDesc">
                <p className="pTopic">10. Project Impact</p>
                <p className="pDesc">
                    By combining React Routes, the Context API, responsive
                    design principles, and versatile CRUD operations, the
                    project offers users a seamless experience for managing and
                    interacting with data on different devices. This application
                    serves as an example of a modern web app that prioritizes
                    both functionality and user experience.
                </p>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Home;
