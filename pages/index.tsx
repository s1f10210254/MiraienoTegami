import { CommentBox } from "@/component/Home/CommentBox/CommentBox"
import styles from "./index.module.css"
import { Main } from "@/component/Home/Main/Main"
import { TopBar } from "@/component/Home/TopBar/TopBar"
import { useAtom } from "jotai";
import { commentBoxShowAtom, showModelAtom } from "@/utils/jotai";
import { useEffect, useState } from "react";
import { ShowModel } from "@/component/Home/ShowModel/ShowModel";

export default function Home(){
    const [showModel, setShowModel] = useAtom(showModelAtom);
    const [commentBoxShow, setCommentBoxShow] = useAtom(commentBoxShowAtom);
    useEffect(() => {
      if (showModel) {
          const timer = setTimeout(() => {
              setShowModel(false);
          }, 2000);
          return () => {
              clearTimeout(timer);
          };
      }
    }, [showModel, setShowModel]);

    const getDate = () => {
      const date = new Date()
      const currentHour = date.getHours();
      // console.log("currentHour",currentHour)
      const currentMinutes = date.getMinutes()
  
      const result = currentHour * 100 + currentMinutes
      return result;
    }

    //現在の時刻を記録
    const [currentDateTime, setCurrentDateTime] = useState(getDate());
    useEffect(()=>{
      // setCurrentDateTime(getCurrentTimestamp());
    
      const intervalId = setInterval(() => {
        const date = getDate();
        setCurrentDateTime(date);
        // console.log("currentDateTime", date);
        if (currentDateTime >= 1900){
          setCommentBoxShow(true)
        }
      }, 60 * 1000);
    
      return ()=>{
        clearInterval(intervalId)
      }
    },[setCommentBoxShow,setCurrentDateTime,currentDateTime])

  return (
    <div className={styles.container}>
      {showModel && (
        <div> <ShowModel /></div>
      )}
      {!showModel && (
        <div>
          <TopBar />
          <Main />
          {/* <CommentBox />   */}
          {commentBoxShow && (
            <div>
              <CommentBox />
            </div>        
          )}
            
        </div>
      )}
         
    </div>
  )
}