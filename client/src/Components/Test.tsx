import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Test: React.FC = () => {
   
const[loading, setLoading]=useState(true);
const[error, setError]=useState("");
const[post, setPost]=useState<{title: string}>({title:''}) 
useEffect(()=>{
 axios.get('https://jsonplaceholder.typicode.com/posts')
 .then((response)=>{
  setLoading(false)
  setError("");
  setPost(response.data);
 }).catch((error)=>{
  setLoading(false)
  setError("Somthing went wrong");
  setPost({title:''});
 })

},[])



   return (
      <div>
      {loading? "Loading..." : post.title}
      {error? error: null}
      </div>
   );
};

export default Test;
