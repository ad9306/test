"use client"

import dayjs from "dayjs"
import { useState } from "react"

export default function CalendarPart(props: any) {

    const now = dayjs()
    const today = now.format("YYYY.MM.DD")
    console.log(today);
    
    return (
        <div>
            <button>
                time
            </button>
        </div>
    )
}