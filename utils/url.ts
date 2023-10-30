const base =()=>{
    if(process.env.NODE_ENV === "production"){
        return "https://miraieno-tegami-git-memorial-s1f10210254s-projects.vercel.app/"
    }else if(process.env.NODE_ENV === "development"){
        return ""
    }
}

export const baseURL = base()