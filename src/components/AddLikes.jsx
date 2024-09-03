import React from "react";
import { useState } from "react";
import { ThumbsUp,  MessageCircle, Forward, SendHorizonal } from 'lucide-react';

export default function AddLikes (props) {
    const [likeCount,setLikeCount]= useState(0);
    const addLike = (event)=>{
        event.preventDefault();
        setLikeCount(props.likeCount + 1);
    }
   

    return(
        <div className="flex flex-col mt-4 justify-between">
                    <div className="flex mb-2 items-center">
                    <ThumbsUp className="w-4 text-blue-700"/>
                    <h6 className="text-neutral-500 mt-1">  {likeCount} likes</h6>
                    </div>
                    
                    <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <button><ThumbsUp className="text-slate-500" onClick={addLike}/></button>
                         <h6 className="text-sm font-thin text-slate-500">like</h6>
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageCircle className="text-slate-500"/> <h6 className="text-sm font-thin text-slate-500">Commenter</h6>
                    </div>
                    <div className="flex items-center gap-1">
                        <SendHorizonal className="text-slate-500"/> <h6 className="text-sm font-thin text-slate-500">Envoyer</h6>
                    </div>
                    <div className="flex items-center gap-1">
                        <Forward className="text-slate-500"/> <h6 className="text-sm font-thin text-slate-500">Partager</h6>
                    </div>
                    </div>
                  </div>
    )

  }