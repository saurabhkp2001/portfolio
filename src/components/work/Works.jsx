import React from 'react';
import {projectData} from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <div>
        <div className='work_container container grid'>
            {projectData.map((item)=>{
                return <WorkItem item={item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Works