import classes from "./contact-form.module.css"
import { useState, useEffect } from "react";
import Notification from "../ui/notification";


export default function ContactForm() {
    const [email, setemail] = useState("")
    const [name, setname] = useState("")
    const [msg, setmsg] = useState("")
    const [reqStatus, setReqStatus] = useState("")
    useEffect(() => {
        if (reqStatus == "success" || reqStatus == "error") {
            const timer = setTimeout(() => {
                setReqStatus(null)
            }, 3000)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [reqStatus])
    async function sendContactData(contactDeatils) {
        const resp = await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify({ email: email, name: name, message: msg }),
            headers: { 'Content-Type': 'application/json' },
        })

        const data = await resp.json()
        if (!resp.ok) {
            throw new Error(data.message || "Something went wrong")
        }
    }


    async function sendMessageHandler(event) {
        event.preventDefault();
        setReqStatus("pending")
        try {
            await sendContactData({ email: email, name: name, message: msg })
            setReqStatus("success")
        }
        catch (error) {
            setReqStatus("error")
        }

    }
    let notification;
    if (reqStatus == 'pending') {
        notification = {
            status: "pending",
            title: "Pending",
            message: "Your MSG is on its way"
        }
    }

    if (reqStatus == 'success') {
        notification = {
            status: "success",
            title: "Success ",
            message: "Your MSG send successfully"
        }
    }
    if (reqStatus == 'error') {
        notification = {
            status: "error",
            title: "Error ",
            message: "Your MSG error"
        }
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler} >
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email" >Your Email</label>
                        <input type="email" id="email" value={email} onChange={event => setemail(event.target.value)} required></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name" >Your Name</label>
                        <input type="text" id="name" value={name} onChange={event => setname(event.target.value)} required></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message" >Your message</label>
                        <textarea id="message" rows="5" value={msg} onChange={event => setmsg(event.target.value)}></textarea>
                    </div>
                    <div className={classes.action} >
                        <button>SendMessage</button>
                    </div>
                </div>
            </form>
            {notification && <Notification
                message={notification.message}
                status={notification.status}
                title={notification.title} />}
        </section>
    )
}
