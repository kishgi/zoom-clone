'use client';

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) => {
    const [isMicCamOn, setIsMicCamOn] = useState(false);
    const call = useCall();

    if(!call){
        throw new Error('usercall must be used within StreamCall component');
    }

    useEffect(() => {
        if (isMicCamOn) {
            call?.camera?.disable();
            call?.microphone?.disable();
        } else {
            call?.camera?.enable();
            call?.microphone?.enable();
        }
    }, [isMicCamOn, call?.camera, call?.microphone])

    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
            <h1 className='text-3xl font-bold'>Meeting Setup</h1>
            <VideoPreview/>
            <div className='flex h-16 items-center gap-3 justify-center'>
                <label className='flex items-center font-medium gap-2 justify-center'>
                    <input
                        type="checkbox"
                        checked={isMicCamOn}
                        onChange={(e) => setIsMicCamOn(e.target.checked)}
                        className='accent-sky-1'
                    />
                    Join with mic & camera off
                </label>
                <DeviceSettings/>
            </div>
            <Button className='rounded-md bg-green-500 px-4 py-2.5 cursor-pointer hover:bg-green-500/80' 
                    onClick={() => {
                                call?.join;
                                setIsSetupComplete(true);
                            }}>
                Join meeting
            </Button>
        </div>
    )
}

export default MeetingSetup
