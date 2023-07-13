import React from "react";

const Frontend = () => {
  return (
    <div className="skills_content">
    <h3 className="skills_title">Frontend Developer</h3>

    <div className='skills_box'>
      <div className='skills_group'>
        <div className='skills_data'>
        <i class='bx bxs-file-html bx-tada' style={{color:'#1835e0'}} ></i>

          <div>
            <h3 className="skills_name">HTML</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxs-file-css bx-tada' style={{color:'#4fdd27'}}  ></i>

          <div>
            <h3 className="skills_name">CSS</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxl-javascript bx-flip-vertical bx-tada' style={{color:'#f01224'}}  ></i>

          <div>
            <h3 className="skills_name">JavaScript</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxl-react bx-spin bx-flip-vertical' style={{color:'#1613d9'}} ></i>

          <div>
            <h3 className="skills_name">React</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxl-github bx-flip-vertical bx-tada' style={{color:'#1b1b1e'}}  ></i>

          <div>
            <h3 className="skills_name">Git</h3>
            <span className="skills_level">Basic</span>
          </div>
        </div>

        <div className="skills_data">
        <i class='bx bxl-bootstrap bx-tada bx-flip-vertical' style={{color:'#f0f012'}} ></i>

          <div>
            <h3 className="skills_name">Bootstrap</h3>
            <span className="skills_level">Intermediate</span>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Frontend;
