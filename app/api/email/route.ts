import emailjs from "@emailjs/browser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        emailjs.init({
            publicKey: "bSP3W3gSbGqP7WQyE",
        });

        const response = await emailjs.send(
            "service_2h5ah9x",
            "template_plsf7re",
            {
                name,
                email,
                message,
            }
        );

        return new NextResponse(response.text, { status: response.status });
    } catch (error) {
        console.log("[EMAIL_POST]", error);

        return new NextResponse("Internal Error", { status: 500 });
    }
}
