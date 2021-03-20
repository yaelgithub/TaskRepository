import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {actions} from '../Store/actions'
import {Link} from "react-router-dom";

function mapStateToProps(state){
    return{
        list:state.list       
    }
}

const mapDispatchToProps=(dispatch)=>({                                       
   setList:(items)=>dispatch(actions.setList(items))
})
export default connect(mapStateToProps,mapDispatchToProps)( function Display(props){

    //debugger
    // const [list,setList]=useState(null)
    const {list,setList}=props

    useEffect(async()=>{
        try {        
            const response=await fetch('https://jsonplaceholder.typicode.com/todos')
            const items=await response.json()
            setList(items)
            //console.log(list);
            
        } catch (error) {
            console.log('error');
        }

    },[])

    return(
        <>

<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <Link to="/Home" className="nav-item nav-link active text-danger" id="nav-home-tab" data-toggle="tab" role="tab"  aria-selected="true">Home</Link>
    <Link to="/PrivateArea" className="nav-item nav-link active text-danger" id="nav-home-tab" data-toggle="tab" role="tab"  aria-selected="true">Private Area</Link>
    {/* <Link to="/Home" className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" role="tab"  aria-selected="true"></Link> */}
    {/* <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a> */}
    {/* <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a> */}
    {/* <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a> */}
  </div>
</nav>
{/* <div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div> */}

        {
            list?
        
        <ul className="list-group" > 
            {list.map((item,index)=>
            <li  className="list-group-item" key={index}>{item.title}</li>
             )}           
        </ul>
        :""}
        </>
    )
})