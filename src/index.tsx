"use client"

import React, { FunctionComponent } from 'react'
import * as Spinners from './wrapper'

export default async function (props: any) {
    let SpinComponent : any = Spinners[props.spinner]
    return (
        <div id="spinwrapper">
            <SpinComponent />
        </div>
    )
}