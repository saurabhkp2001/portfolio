import React from "react";
import "./qualification.css";

const Qualification = () => {

  const[toggleState,setToggleState]=React.useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div 
          className={
            toggleState===1
            ?"qualification_button qualification_active button--flex"
            :"qualification_button button--flex"
            }
            onClick={()=>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div  className={
            toggleState===2
            ?"qualification_button qualification_active button--flex"
            :"qualification_button button--flex"
            }
            onClick={()=>toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_section">
          <div 
          className={toggleState===1
          ?"qualification_content qualification_content-active"
          :"qualification_content"
          }
          onClick={()=>toggleTab(1)}
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">B Tech (CSE)</h3>
                <span className="qualification_subtitle">Institute of Engineering and Rural Technology (IERT) Prayagraj</span>
                <div className="qualification_calender">
                  <i className="bx bxs-calendar"></i> 2020-2024
                  {/* <i class='bx bxs-calendar'></i> */}
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Intermediate</h3>
                <span className="qualification_subtitle">Rahul Internation Public School, Chandauli</span>
                <div className="qualification_calender">
                <i className="bx bxs-calendar"></i>2018-2019
                </div>
              </div>
            </div>


            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">High School</h3>
                <span className="qualification_subtitle">Imperial Public School, Varanasi</span>
                <div className="qualification_calender">
                <i className="bx bxs-calendar"></i> 2016-2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            
          </div>

          <div  className={toggleState===2
          ?"qualification_content qualification_content-active"
          :"qualification_content"
          }>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer</h3>
                <span className="qualification_subtitle">Frontend using ReactJs</span>
                <div className="qualification_calender">
                <i className="bx bxs-calendar"></i> 2021-Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Programming Language</h3>
                <span className="qualification_subtitle">C++, C</span>
                <div className="qualification_calender">
                <i className="bx bxs-calendar"></i> 2020-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
