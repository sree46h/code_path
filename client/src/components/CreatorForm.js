import React,{useState,useEffect} from 'react';
import { Form, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import {createCreator,updateCreator,getCreator} from '../actions/creator_action'
const CreatorForm = (props) => {
  const [name,setName] = useState("")
  const [description,setDiscription]=useState("")
  const [image,setImage]=useState("")
  const [youtube,setYoutube]=useState("")
  const [twitter,setTwitter]=useState("")
  const [instagram,setInstagram]=useState()
  const dispatch = useDispatch();
  const chnageHandler=(type,data)=>{
    if(type=="name"){
      setName(data)
    }
    else if(type=="image"){
      setImage(data)
    }
    else if(type=="description"){
      setDiscription(data)
    }
    else if(type=="youtube"){
      setYoutube(data)
    }
    else if(type=="twitter"){
      setTwitter(data)
    }
    else{
      setInstagram(data)
    }
  }
  const submitHandler=async()=>{
    try{
    if(name==""){
      alert("Name should  not be empty")
    }
    else{
      const creator={
        name:name,
        image:image,
        description:description,
        youtube:youtube,
        twitter:twitter,
        instagram:instagram
      }
      const response = await dispatch(createCreator(creator));
      toast.success('applied Succefully');
      props.onClose();
    }
    }
    
    catch(e){
      toast.error("Something went Wrong")
      props.onClose();
    }
    
  }
  return (
    <div className="form-wrapper">
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' onChange={(e)=>chnageHandler("name",e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='Image URL' type='url' onChange={(e)=>chnageHandler("image",e.target.value)}/>
        </Form.Field>
        <Form.TextArea label='Description' placeholder='Description' onChange={(e)=>chnageHandler("description",e.target.value)}/>
        <h3>SOCIAL MEDIA LINKS</h3>
        <Form.Field>
          <label>YouTube</label>
          <input placeholder='YouTube Handle' onChange={(e)=>chnageHandler("youtube",e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Twitter</label>
          <input placeholder='Twitter Handle' onChange={(e)=>chnageHandler("twitter",e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Instagram</label>
          <input placeholder='Instagram Handle' onChange={(e)=>chnageHandler("instagram",e.target.value)}/>
        </Form.Field>
        <Button type='submit' primary onClick={submitHandler}>Add Creator</Button>
      </Form>
    </div>
  );
};

export default CreatorForm;
