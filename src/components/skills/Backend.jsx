import React from "react";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">MySQL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
          <i class='bx bxl-nodejs' style={{color:'#12f0ea'}} ></i>

            <div>
              <h3 className="skills_name">Node Js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Express Js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
