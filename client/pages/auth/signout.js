import React,{useEffect} from 'react';
import useRequest from "../../hooks/useRequest";
import {useRouter} from "next/router";

export default function Signout() {
    const router = useRouter();
    const {doRequest} = useRequest({
        url : '/api/users/signout',
        body : {},
        method : 'post',
        onSuccess : () => router.push('/')
    });

    useEffect(() => {
         doRequest();
    },[]);

    return <div>Signing out...</div>
}