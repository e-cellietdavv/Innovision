import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { apiConnector } from './api/apiConnector'

const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const formData ={
          leaderName:data.leaderName,
          startUpName:data.startUpName,
          leaderPhone:data.leaderPhone,
          leaderPhoneSecondary:data.leaderPhoneSecondary,
          leaderMail:data.leaderMail
        }
        // formData.append('onePager', data.onePager[0]) 

        const result = await apiConnector("POST","http://localhost:3000/submitForm",formData,{},{params:formData})

    }

    return (
        <div>
            <h2>Submit Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Startup Name:
                    <input
                        type="text"
                        name="startUpName"
                        {...register('startUpName', { required: true })}
                    />
                </label>
                <br />
                <label>
                    Leader Name:
                    <input
                        type="text"
                        name="leaderName"
                        {...register('leaderName', { required: true })}
                    />
                </label>
                <br />
                <label>
                    Leader Phone:
                    <input
                        type="text"
                        name="leaderPhone"
                        {...register('leaderPhone', { required: true })}
                    />
                </label>
                <br />
                <label>
                    Leader Phone 2:
                    <input
                        type="text"
                        name="leaderPhoneSecondary"
                        {...register('leaderPhoneSecondary', { required: true })}
                    />
                </label>
                <br />
                <label>
                    Leader Email:
                    <input
                        type="email"
                        name="leaderMail"
                        {...register('leaderMail', { required: true })}
                    />
                </label>
                <br />
                {/* 
                <label>
                    One Pager (PDF):
                    <input
                        type="file"
                        name="onePager"
                        {...register('onePager', { required: true })}
                        accept=".pdf"
                    />
                </label>
                <br />
                */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
