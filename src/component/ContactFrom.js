import React from 'react'
import "./ContactFrom.css"
import { useAuth0 } from "@auth0/auth0-react";
import myimg from "../assets/profile3.png"

export default function ContactFrom() {

  const { isAuthenticated,user} = useAuth0();

  return (
    <>
      <div className='context'>
         <h1>Send a Message To Us!!</h1>

         <div className="pic">
        {isAuthenticated && <img src={user.picture} alt="" />}
        </div>
         
    </div>

       
        <div className='confrom'>
        <form>
             <input type="text" placeholder='Name' value={isAuthenticated ? user.name : ""}  autoComplete="off" required/>
             <input type="email" placeholder='Email'  value={isAuthenticated ? user.email : ""} />
             <input type="text" placeholder='Subject'/>
             <textarea rows="4" placeholder='Message'></textarea>
            
        </form>
        
        <div className="buttoon">
        <button className="btn btn-primary">Send</button>
        </div>
        
         
        <div className="ccard">
               
               <div className="row">
                   
                   <div className="col-2">
                       
                       
                       <img src={myimg} width="70" className="rounded-circle mt-0"/>
                   
                   
                   </div>
                   
                   <div className="col-10">
                       
                       <div className="comment-box ml-2">
                           
                           <h4>Please rating here with your opinion</h4>
                           
                           <div className="rating"> 
                               <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
                               <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                               <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label>
                               <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label>
                               <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                           </div>
                           
                           <div className="comment-area">
                               
                               <textarea className="form-control" placeholder="what is your view?" rows="4"></textarea>
                           
                           </div>
                           
                           <div className="comment-btns mt-2">
                               
                               <div className="row">
                                   
                                   <div className="col-6">
                                       
                                       <div className="pull-left">
                                       
                                       <button className="btn btn-success btn-sm">Cancel</button>      
                                           
                                       </div>
                                   
                                   </div>
                                   
                                   <div className="col-6">
                                       
                                       <div className="pull-right">
                                       
                                       <button className="btn btn-success send btn-sm">Send <i className="fa fa-long-arrow-right ml-1"></i></button>      
                                           
                                       </div>
                                   
                                   </div>
                               
                               </div>
                           
                           </div>
                       
                       
                       </div>
                   
                   </div>
               
               
               </div>
     
           </div>


        </div>
        
    </>
  )
}
