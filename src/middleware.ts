import { NextResponse } from "next/server";


//const redirectUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "https://your-vercel-app-name.vercel.app/";

export default function middleware(request:any){
    let  verify =request.cookies.get("loggedin");
    let url = request.url

    if(!verify && url.includes('/dashboard') ){
                 return NextResponse.redirect("http://localhost:3000/");
                 //return NextResponse.redirect("https://your-vercel-app-name.vercel.app/");  //for live url
                 //return NextResponse.redirect(redirectUrl);

    }
    //console.log("middleware abc")
// if(request.nextUrl.pathname !="/"){

//     return  NextResponse.redirect(new URL("/",request.url))
// }
}