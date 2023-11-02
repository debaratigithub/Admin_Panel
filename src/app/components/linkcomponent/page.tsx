"use client"
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Linkbutton (props:any){
    const router = useRouter();
    return <Box >
        
        <Button variant="outlined" >{props.title}</Button>
        </Box>
}

