'use client';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { signUpDefaultValves } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUpUser } from "@/lib/Actions/user.actions";
import { useSearchParams } from "next/navigation";
function SignUpButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className='w-full' variant='default'>
            {pending ? 'Submitting...' : 'Create account'}
        </Button>
    );
}

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message : ''
    })

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    return (
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-6">
                <div>
    <label htmlFor="name">Name</label>
    <Input id="name" name="name" type="text" autoComplete="name"/>
</div>
<div>
    <label htmlFor="email">Email</label>
    <Input id="email" name="email" type="text"  autoComplete="email"
    defaultValue={signUpDefaultValves.email}/>
</div>
            <div className="space-y-6">
<div>
    <label htmlFor="password">Password</label>
                <Input id="password" name="password" type="password" autoComplete="new-password"
                defaultValue={signUpDefaultValves.password}/>

</div>
<div>
    <label htmlFor="confirmPassword">Confirm Password</label>
                <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password"
                defaultValue={signUpDefaultValves.confirmPassword}/>

</div>

<div>

    <SignUpButton />
</div>
{data && !data.success && (
    <div className = 'text-center text-destructive '>
        {data.message}
    </div>
)}
<div className="text-sm text-center text-muted-foreground">
    Already have an account? { ''}
    <Link href="/sign-in" target = '_self' className="link">
    Sign In
    </Link>
</div>
            </div>
            </div>
        </form>
    );
}

export default SignUpForm;
