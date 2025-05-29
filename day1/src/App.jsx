
import Inputs from './Inputs.jsx'; 
import './App.css'
import myImage from './image.jpeg';

function App() {
  return (
    <div>
    <div id="navbar">
      <div id="child1nav">
        NAINI NITHISH
      </div>
      <div id="child2nav">
        <span>Home</span><span>About</span><span>Contact us</span>
      </div>
      </div>

      <div class="intro">
          <div class="image">
            <img src={myImage} alt=""  />
          </div>
          <div class="descr">
            <h1>OBJECTIVE:</h1>
            <p>
              Seeking a full-stack developer role where I can utilize my knowledge of front-end and back-end technologies like React, Node.js, 
              and MongoDB to build scalable and efficient web applications, while gaining hands-on experience and enhancing my development skills.
            </p>
          </div>
      
      
      {/* <Inputs /> */}
    </div>

    <h2>TECHNICAL SKILLS</h2>
    <div class="images">
      <img src="https://4kwallpapers.com/images/wallpapers/python-programming-3840x2160-16102.jpg" alt="" />
      <img src="https://www.nexustech.je/media/yyaacx1w/sql-1.png" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubsfvX1GCHF8amyfEQxTz7AECFDY-oGMVTg&s" alt="" />
      <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="" />
      <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png" alt="" />
      <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="" />
    </div>

    <h2>PROJECTS</h2>
    <div id="projects">
      <h4 id="heading">HTML AND CSS PROJECT</h4>
     <h6> <a href="https://nithish-git-hub.github.io/css-practice/project/project.html">AI portal by using html and css</a></h6>
      </div>
    </div>

    
  );
}

export default App;

