/** @type {import('next').NextConfig} */
//const nextConfig = {}


const nextConfig = {
    
    env: {
     
      NEXT_PUBLIC_API_URL: "https://nodeserver.mydevfactory.com:6014/"  //Prod URL
  
    },
  }

module.exports = nextConfig
