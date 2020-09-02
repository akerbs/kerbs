import React from "react";
import item1 from "../img/item1.png";
import item2 from "../img/item2.png";
import item3 from "../img/item3.png";
import item4 from "../img/item4.png";
import item5 from "../img/item5.png";
import item6 from "../img/item6.png";

export default function Portfolio() {
  return (
    <div className="Portfolio-content">
      {/* <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item6} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">Suliko Restaurant</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>
            HTML, CSS, JavaScript, React, JSS, Material UI, NodeJS, Express.js,
            Google Analytics
          </div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>
            Create a website for a restaurant with support for 4 languages and
            the ability to reserve tables
          </div>
          <br />
          <br />
          <a
            href="https://suliko3v.vercel.app/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
        </div>
      </div> */}

      <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item5} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">URL Shortener</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>HTML, CSS, JavaScript, NodeJS, React, Express.js, MongoDB</div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>
            Create a URL shortening application with authorization system using
            the MERN stack.
          </div>
          <br />
          <br />
          <a
            href="https://mern-url-shortener-anker.herokuapp.com/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
        </div>
      </div>

      <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item4} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">Store - Admin area</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>HTML, CSS, JavaScript, NodeJS, EJS, Express.js, CSV</div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>
            Create an Admin area page using CSV-file as a database (for a test
            Online-shop).
          </div>
          <br />
          <br />
          <a
            href="https://shop-admin-area-anker.herokuapp.com/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
          <hr className="hr" />
          <br />
          <br />
        </div>
      </div>

      <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item3} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">Store SPA</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>HTML, CSS, JavaScript, NodeJS, EJS, Express.js, CSV</div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>
            Create a SPA using CSV-file as a database (for a test Online-shop).
          </div>
          <br />
          <br />
          <a
            href="https://shop-restful-spa-anker.herokuapp.com/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
          <hr className="hr" />
          <br />
          <br />
        </div>
      </div>

      <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item2} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">Todo list</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>HTML, CSS, JavaScript, NodeJS, Socket.io, Express.js.</div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>Create a one global todo list for multiple users.</div>
          <br />
          <br />
          <a
            href="https://todo-list-with-socket-anker.herokuapp.com/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
          <hr className="hr" />
          <br />
          <br />
        </div>
      </div>

      <div className="Portfolio-item">
        <div className="Item-img-container">
          <img src={item1} alt="" className="Item-img" />
        </div>
        <div className="Item-text">
          <span className="highlight-1">Online chat</span>
          <br />
          <div>2020</div>
          <br />
          <span className="highlight-2">Technology</span>
          <br />
          <div>HTML, CSS, JavaScript, NodeJS, Socket.io, Express.js.</div>
          <br />
          <span className="highlight-2">Goal</span>
          <br />
          <div>
            Create a trial online chat room based on the web socket protocol.
          </div>
          <br />
          <br />
          <a
            href="https://chat-with-socket-anker.herokuapp.com/"
            onClick="this.blur()"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <br /> <br />
          <br />
          <br />
          <hr className="hr" />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
