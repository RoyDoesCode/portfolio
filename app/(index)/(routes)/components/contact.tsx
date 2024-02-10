import Link from "next/link";
import { useForm } from "react-hook-form";
import zod from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Interactable } from "@/components/interactable";

const formSchema = zod.object({
    name: zod
        .string()
        .min(1, { message: "Name must contain at least 1 character." }),
    email: zod
        .string()
        .min(1, { message: "Email must contain at least 1 character." })
        .email("Invalid email address"),
    message: zod
        .string()
        .min(10, { message: "Message must be at least 10 characters long." }),
});

type FormValues = zod.infer<typeof formSchema>;

const Contact = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onValidSubmit = (values: FormValues) => {
        // send email
    };

    return (
        <div className="flex flex-row justify-center p-32 gap-16">
            <div className="flex flex-col items-center w-1/2 text-center gap-16 p-16">
                <Header title="CONTACT" />
                <p>
                    Feel free to get in touch with me if you have any inquiries,
                    project proposals, or simply want to discuss ideas. I'm here
                    to collaborate on exciting web development ventures, whether
                    it's building your dream website, revamping an existing one,
                    or troubleshooting technical challenges. Let's bring your
                    vision to life with clean, efficient code and captivating
                    design. Drop me a line using the contact form below, and
                    I'll get back to you promptly. Your satisfaction is my
                    priority, and I look forward to turning your digital
                    aspirations into reality.
                </p>
                <div className="flex flex-col gap-4">
                    <h2 className="font-black text-primary text-3xl">E-mail</h2>
                    <Link
                        href="mailto:roy@roybarzilay.com"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        roy@roybarzilay.com
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-black text-primary text-3xl">
                        Whatsapp
                    </h2>
                    <Link
                        href="https://wa.me/972527088557"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        +972-527088557
                    </Link>
                </div>
            </div>
            <div className="transparent-box flex flex-col items-center w-1/2 text-center p-24 gap-16">
                <Header title="CONTACT FORM" />
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onValidSubmit)}
                        className="w-full flex flex-col gap-16"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Your name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Your e-mail"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Message"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Interactable className="p-4">
                                <button
                                    type="submit"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    SEND MESSAGE
                                </button>
                            </Interactable>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default Contact;
