import { Navigate } from "@solidjs/router"
import { isSignedIn } from "../stores/user"


export default function Home() {
    return <>
        {/* {!isSignedIn() && <Navigate href={"/login"} />} */}
        Home
    </>
}