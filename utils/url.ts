const base =()=>{
    if(process.env.NODE_ENV === "production"){
        return "https://miraieno-tegami.vercel.app/"
    }else if(process.env.NODE_ENV === "development"){
        return ""
    }
}

export const baseURL = base()