import { StreamClient } from './../node_modules/@stream-io/node-sdk/src/StreamClient';
'user server'

import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error('User not found or not logged in');

    if (!apiKey) throw new Error('Missing Stream API key');

    if (!apiSecret) throw new Error('Missing Stream API secret');

    const client = new StreamClient(apiKey, apiSecret);

    const exp = Math.round(new Date().getTime() / 1000) + 60*60;

    const issued = Math.floor(Date.now() / 1000) - 60;

    return await client.createToken(user.id, issued, exp);
}