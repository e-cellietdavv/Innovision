import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../api/apiConnector'
import './Form.css';

const Form = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const formData ={
          leaderName:data.leaderName,
          startUpName:data.startUpName,
          leaderPhone:data.leaderPhone,
          leaderPhoneSecondary:data.leaderPhoneSecondary,
          leaderMail: data.leaderMail,
          teammates: data.teammates,
        }
        
        const result = await apiConnector("POST","http://localhost:3000/submitForm",formData,{},{params:formData})

        reset();
        alert("Submitted");
    }

    return (
        <div className='outer'>
            <div className='typewriter'>
                <h2 className='head'>Register Now!!</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p id='label-text'>Team Name:</p>
                    <input
                        type="text"
                        placeholder='The Next Microsoft!'
                        name="startUpName"
                        {...register('startUpName', { required: true })}
                    />
                </label>
                <br />
                <label>
                    <p id='label-text'>Leader Name:</p>
                    <input
                        type="text"
                        name="leaderName"
                        placeholder='The Next Bill Gates'
                        {...register('leaderName', { required: true })}
                    />
                </label>
                <br />
                <label>
                    <p id='label-text'>Leader's Phone Number:</p>
                    <input
                        type="text"
                        name="leaderPhone"
                        placeholder='+91 ***** *****'
                        {...register('leaderPhone', { required: true })}
                    />
                </label>
                <br />
                <label>
                    <p id='label-text'>Alternate Phone Number:</p>
                    <input
                        type="text"
                        placeholder='+91 ***** *****'
                        name="leaderPhoneSecondary"
                        {...register('leaderPhoneSecondary', { required: true })}
                    />
                </label>
                <br />
                <label>
                    <p id='label-text'>E-Mail:</p>
                    <input
                        type="email"
                        name="leaderMail"
                        placeholder='beststartupever@innovation.in'
                        {...register('leaderMail', { required: true })}
                    />
                </label>
                <br />
                <label>
                    <p>Number Of Teammates</p>
                    <input
                        type="Number"
                        name="teammates"
                        min='2'
                        max='10'
                        placeholder='00'
                        {...register('teammates', { required: true })}
                    />
                </label>
                <br />
                <button className='form-button' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form