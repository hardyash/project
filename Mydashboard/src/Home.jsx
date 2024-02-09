import React from 'react'
import { ImProfile } from "react-icons/im";

function Home() {
  return (

    <main className="main-cont">
         <div className='main-title'>
          <h3>Dashboard</h3>
         </div>

        <div className="main-cards">
          
          <div className="card">
             <div className="card-inner">
                <h3>Available Position   </h3>
                < ImProfile  className='icon'/>
              </div>
            <h1> 24 </h1>
            <p>4 Urgently needed</p>
          </div>
          
          <div className="card">
             <div className="card-inner">
                <h3>Job Open   </h3>
                
              </div>
            <h1> 10 </h1>
            <p>4 Active hiring</p>
          </div>

          <div className="card">
             <div className="card-inner">
                <h3> New Employees  </h3>  
              </div>
            <h1> 24 </h1>
            <p>4 Department</p>
          </div>
      </div>


      <div className="main2-cards">
          <div className="card1">
             <div className="card-inner">
                <h3> Total Employees  </h3>
              </div>
            <h3> 216 </h3>
            <p>120 Men <br/>
            96 Women</p>
          </div>   
      
          <div className="card1">
             <div className="card-inner">
                <h3> Talent Request  </h3>                
              </div>
            <h3> 16 </h3>
            <p>6 Men <br/>
            10 Women</p>
          </div>

        </div>


        <div className="lower-card">
        <div className='main-title'>
         
         </div>
      
      <div class="container">
          <h3>Announcements</h3>
        <div class="announcement">
            <p>Today, 13 Sep 2021</p>
            <div class="announcement-item">
                
            </div>
            <div class="announcement-item">
               
            </div>
        </div>
        <div class="announcement">
            <p>Yesterday</p>
            <div class="announcement-item">
                
            </div>
        </div>
        <a href="#" class="see-all">See All Announcement</a>
        </div>
        </div>

        <div class="recent-activity">
          <div className="head">
          <h3>Recently Activity</h3>
            </div>
        <ul>
          <p>10:40 AM, Fri 10 Sept 2021</p>
           <h3>You Posted a New Job</h3>
            <li>Kindly check the requirements and terms of work and make sure everything is right.</li>
         <br/>
         
          <li>Today you makes 12 Activity</li>
          <h4>See All Activity</h4>
          </ul>
        </div>

        <div class="upcoming-schedule">
  <h3>Upcoming Schedule</h3>
  <p className='date'>Today, 13 Sep 2021</p>
  <ul>
    <li class="priority">Priority:</li>
    <li>Review candidate applications</li>
    <li className='time'>Today - 11.30 AM</li>
    <li class="other">Other:</li>
    
    <li>Interview with candidates</li>
    <li className='time'>Today - 10.30 AM</li>
    <li>Short meeting with product designer from IT Department</li>
    <li className='time'>Today - 09.15 AM</li>
    <li class="create-schedule">Create a New Schedule</li>
  </ul>
</div>
    </main>



   
  )

};

export default Home
