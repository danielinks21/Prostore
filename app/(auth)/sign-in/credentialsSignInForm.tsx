'use client';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { signInDefaultValves } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInwithcredentails } from "@/lib/Actions/user.actions";
import { useSearchParams } from "next/navigation";
function SignInButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className='w-full' variant='default'>
            {pending ? 'Signing in...' : 'Sign in'}
        </Button>
    );
}

const CrendentialsSignInForm = () => {
    const [data, action] = useActionState(signInwithcredentails, {
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
    <label htmlFor="email">Email</label>
    <Input id="email" name = 'email' required autoComplete="email"
    defaultValue={signInDefaultValves.email}/>
</div>
            <div className="space-y-6">
<div>
    <label htmlFor="password">Password</label>
                <Input id="password" name = 'password' type="password" required autoComplete="current-password"
                defaultValue={signInDefaultValves.password}/>

</div>
<div>

    <SignInButton />
</div>
{data && !data.success && (
    <div className = 'text-center text-destructive '>
        {data.message}
    </div>
)}
<div className="text-sm text-center text-muted-foreground">
    Don&apos;t have an account? { ''}
    <Link href="/sign-up" target = '_self' className="link">
    sign up
    </Link>
</div>
            </div>
            </div>
        </form>
    );
}

export default CrendentialsSignInForm;
